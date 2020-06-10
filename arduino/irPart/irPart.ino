#include <IRremote.h>
#include <ArduinoJson.h>
#include "WiFiEsp.h"
//TempSensosr
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

//Working on this!

//Global----------------------------------------------
const int deviceID = 1;
const int interruptPin = 20;
unsigned long lastConnectionTime = 0;         // last time you connected to the server, in milliseconds
const unsigned long postingInterval = 10000L; // delay between updates, in milliseconds

//Sensor----------------------------------------------
#define DHTPIN 4
#define DHTTYPE    DHT11     // DHT 11
DHT_Unified dht(DHTPIN, DHTTYPE);
uint32_t delayMS;

//IR--------------------------------------------------
int RECV_PIN = 2;
IRrecv irrecv(RECV_PIN);
IRsend irsend;
int khz = 38; // 38kHz carrier frequency for the NEC protocol
decode_results results;
unsigned int rawCodes[RAWBUF]; // The durations if raw
int codeLen; // The length of the code

int RECV_PIN_POWER = 10;

//Boolean for getting codes
boolean irRecieve = false;

//WIFI------------------------------------------------
char ssid[] = /*"My SBB"*/"AndroidAP4bdb";            // your network SSID (name)
char pass[] = /*"Nebojsa60"*/"jumpjet98";        // your network password
int status = WL_IDLE_STATUS;     // the Wifi radio's status
char server[] = "daljinac-api.herokuapp.com";
// Initialize the Ethernet client object
WiFiEspClient client;

void setup() {
  // initialize serial for debugging
  Serial.begin(115200);
  // initialize serial for ESP module
  Serial1.begin(9600);

  //Interrupt--------------------------------
  pinMode(interruptPin,INPUT);
  attachInterrupt(digitalPinToInterrupt(interruptPin),toggleIrReceiveFlag,RISING);

  //Sensor----------------------------------
  dht.begin();

  //IR part---------------------------------
  irrecv.enableIRIn(); // Start the receiver
  pinMode(RECV_PIN_POWER,OUTPUT);

  //WIFI part-------------------------------
  // initialize ESP module
  WiFi.init(&Serial1);
  
  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  WiFi.disconnect();
  Serial.println(WiFi.status());

  // attempt to connect to WiFi network
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, pass);
    delay(5);
  }

  Serial.println("You're connected to the network");
  printWifiStatus();

  //receiveJson();

}

void loop() {
  
  if(irRecieve){
    Serial.println("IN");
    
    int numberOfRecievedCodes = 0;
    boolean again = true;
    digitalWrite(RECV_PIN_POWER, HIGH);
    //Prvi kod
    while(again){
      again = !recieve();
      //Serial.println(again);
      //ovde ide kod za slanje
    }
    //irrecv.enableIRIn();
    digitalWrite(RECV_PIN_POWER, LOW);
    sendJson("Power");
    delay(1000);
    numberOfRecievedCodes++;
    again=true;
    digitalWrite(RECV_PIN_POWER, HIGH);
    irrecv.enableIRIn();
    
    //Drugi kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    digitalWrite(RECV_PIN_POWER, LOW);
    sendJson("TempUp");
    delay(1000);
    numberOfRecievedCodes++;
    again=true;
    digitalWrite(RECV_PIN_POWER, HIGH);
    irrecv.enableIRIn();
    
    //Treci kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    digitalWrite(RECV_PIN_POWER, LOW);
    sendJson("TempDown");
    numberOfRecievedCodes++;
    
    if(numberOfRecievedCodes == 3){
      irRecieve = false;
    }
  }

  /*Serial.println("All codes stored!");
  while(true){};*/

  if (millis() - lastConnectionTime > postingInterval) {
    Serial.println("Fetching data...");
    receiveJson();
  }
  

}

//IR---------------------------------------------------------------------------
void storeCode(decode_results *results){
  Serial.println("Saveing raw code: ");
  // To store raw codes:
  // Drop first value (gap)
  // Convert from ticks to microseconds
  // Tweak marks shorter, and spaces longer to cancel out IR receiver distortion
  
  codeLen = results->rawlen - 1;
  
  for(int i = 1; i <= codeLen; i++){
    if (i % 2) {
        // Mark
        rawCodes[i - 1] = results->rawbuf[i]*USECPERTICK - MARK_EXCESS;
        //Serial.print(" m");
      } 
      else {
        // Space
        rawCodes[i - 1] = results->rawbuf[i]*USECPERTICK + MARK_EXCESS;
        //Serial.print(" s");
      }
      //Serial.print(rawCodes[i - 1], DEC);
  }
  Serial.println("");
  //Print treba izbrisati posel testiranja
}

//Vraca da li je uspesno skenirao kod i sacuvao ga ako jeste
boolean recieve(){
  boolean returnVal;
  //irrecv.enableIRIn();
  returnVal = irrecv.decode(&results);
  if(returnVal){
    storeCode(&results);
    irrecv.resume();
  }

  return returnVal;
}

//WIFI-JSON---------------------------------------------------------------------------------------
void sendJson(char* commandName){
  // close any connection before send a new request
  // this will free the socket on the WiFi shield
  //client.stop();
  
  size_t capacity = JSON_ARRAY_SIZE(255) + JSON_OBJECT_SIZE(3); //125 kao solidan broj mesta
  DynamicJsonDocument doc(capacity);

  doc["deviceID"] = deviceID;
  doc["code"] = commandName;
  JsonArray bits = doc.createNestedArray("bits");
  
  for(int i=0; i < codeLen; i++){
    bits.add(rawCodes[i]);
  }
  
  Serial.print("Array size = ");
  Serial.println(bits.size());
  serializeJsonPretty(doc, Serial);
  Serial.println();

  String headerPart = "POST /api/codes/" + String(deviceID) + " HTTP/1.1";
  Serial.println(headerPart);
  /*Serial.print("measureJson value - ");
  Serial.println(measureJson(doc));*/
  

 if(client.connect(server, 80)){
   
    client.println(headerPart);
    client.println("Host: daljinac-api.herokuapp.com");
    //client.println("Accept: */*");
    client.print("Content-Length: ");
    client.println(measureJson(doc));
    client.println("Content-Type: application/json");
    client.println();
    serializeJson(doc, client);
  }
  
  doc.clear();
  Serial.print("JsonDocument size = ");
  Serial.println(doc.memoryUsage());
}

void receiveJson(){
  // close any connection before send a new request
  // this will free the socket on the WiFi shield
  client.stop();


   // Get temperature event and print its value.
  sensors_event_t event;
  dht.temperature().getEvent(&event);
  if (isnan(event.temperature)) {
    Serial.println(F("Error reading temperature!"));
  }
  else {
    Serial.print(F("Temperature: "));
    Serial.print(event.temperature);
    Serial.println(F("°C"));
  }
  
  // Make a HTTP request
  String headerPart = "GET /api/actions/firstUnprocessed/" + String(deviceID) + "?temp=" + String(event.temperature) +" HTTP/1.1";

  // note the time that the connection was made
    lastConnectionTime = millis();
  
  if(client.connect(server, 80)){
    Serial.println("Connecting...");
    Serial.println(headerPart);
    client.println(headerPart);
    client.println(F("Host: daljinac-api.herokuapp.com"));
    client.println("Connection: Keep-Alive"); //Moze bez ovoga
    client.println("Keep-Alive: timeout=5, max=20");
    client.println();
  }else {
    // if you couldn't make a connection
    Serial.println("Connection failed");
  }

  //IMPORTANT!
  //delay(5);

  String inputStream;
  boolean writeChar = false;
  while(!client.available()){}
  while (client.available()) {
    char c = client.read();
    if(c == '{'){
      writeChar = true;
    }

    if(writeChar){
      inputStream += String(c);
    }else{
      Serial.print(c);
    }

    if(c == '}'){
      writeChar = false;
    }
  }

  //Serial.println("inputStream: " + inputStream);

  //JsonDocument
  //size_t capacity = JSON_ARRAY_SIZE(255) + JSON_OBJECT_SIZE(8);
  DynamicJsonDocument doc(1730);
  
  deserializeJson(doc, inputStream);

  JsonArray bits = doc["bits"].as<JsonArray>();
  Serial.print("Array size = ");
  Serial.println((int)bits.size());
  serializeJson(doc, Serial);
  Serial.println();

  for(int i=0; i<(int)bits.size(); i++){
    rawCodes[i] = bits[i];
  }

  //Sending bits
  if((int)bits.size() > 0){
    digitalWrite(8,HIGH);
    irsend.sendRaw(rawCodes, (int)bits.size(), khz); //Note the approach used to automatically calculate the size of the array.
    digitalWrite(8,LOW);
    Serial.print("Sent - ");
    for(int i = 0; i<(int)bits.size(); i++){
      Serial.print(rawCodes[i]);
      Serial.print(" ");
    }
    Serial.println();
  }
  
  doc.clear();
}

void toggleIrReceiveFlag(){
  irRecieve = true;
  Serial.println("Started to receive!");
}


void printWifiStatus(){
  // print the SSID of the network you're attached to
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength
  long rssi = WiFi.RSSI();
  Serial.print("Signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

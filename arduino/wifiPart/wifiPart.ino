#include "WiFiEsp.h"
#include <IRremote.h>

// Emulate Serial1 on pins 6/7 if not present
#ifndef HAVE_HWSERIAL1
#include "SoftwareSerial.h"
SoftwareSerial Serial1(6, 7); // RX, TX
#endif


int RECV_PIN = 2;
unsigned int rawCodes[RAWBUF]; // The durations if raw
int codeLen; // The length of the code
IRrecv irrecv(RECV_PIN);
decode_results results;


char ssid[] = "My SBB";            // your network SSID (name)
char pass[] = "Nebojsa60";        // your network password
int status = WL_IDLE_STATUS;     // the Wifi radio's status
char server[] = "daljinac-api.herokuapp.com";

// Initialize the Ethernet client object
WiFiEspClient client;

//Boolean for getting codes
boolean irRecieve = true;

void setup() {
  // initialize serial for debugging
  Serial.begin(115200);
  // initialize serial for ESP module
  Serial1.begin(9600);

  //IR part---------------------------------
  irrecv.enableIRIn(); // Start the receiver

  //WIFI part-------------------------------
  // initialize ESP module
  WiFi.init(&Serial1);

  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, pass);
  }

  Serial.println("You're connected to the network");
  printWifiStatus();

  // connecting to server
  Serial.println();
  Serial.println("Starting connection to server...");
  // if you get a connection, report back via serial
 /* if (client.connect(server, 80)) {
    Serial.println("Connected to server");
    // Make a HTTP request
   client.println(F("GET /actions/firstUnprocessed/1 HTTP/1.1"));
    client.println(F("Host: daljinac-api.herokuapp.com"));
    client.println("Connection: close");
    client.println();
  }*/
  
  // OVO RADI -> makePostRequest(String("aleksa"),123456789);

  Serial.println("IN");
  if(numberOfAvailableCodes()==3){
    irRecieve= false;
  }
}

void loop() {
  Serial.println("IN");
  if(irRecieve){
    
    int numberOfRecievedCodes = 0;
    boolean again = true;
    //Prvi kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    numberOfRecievedCodes++;
    again=true;
    
    //Drugi kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    numberOfRecievedCodes++;
    again=true;
    
    //Treci kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    numberOfRecievedCodes++;
    again=true;
    //Mora da se napise jos dva puta ova whiel petlja ali za sad samo jedna dok testiramo
    
    if(numberOfRecievedCodes == 3){
      irRecieve = false;
    }
  }

  Serial.println("All codes stored!");
  while(true){};
  //WIFE deo
  while (client.available()) {
    char c = client.read();
    Serial.write(c);
  }

  // if the server's disconnected, stop the client
  if (!client.connected()) {
    Serial.println();
    Serial.println("Disconnecting from server...");
    client.stop();

    // do nothing forevermore
    while (true);
  }

}

void makeGetRequest(){
  // Make a HTTP request
  if(client.connect(server, 80)){
    client.println(F("GET /actions/firstUnprocessed/1 HTTP/1.1"));
    client.println(F("Host: daljinac-api.herokuapp.com"));
    client.println("Connection: close");
    client.println();
  }
}

void makePostRequest(String id, int code){

  String content = "{\"deviceID\":\"aleksa\",\"code\":123456789}";
  
  if(client.connect(server, 80)){
    client.println(F("POST /actions HTTP/1.1"));
    client.println("Host: daljinac-api.herokuapp.com");
    client.println("Accept: */*");
    client.print("Content-Length: ");
    client.println(content.length());
    client.println("Content-Type: application/json");
    client.println();
    client.println(content);
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
        Serial.print(" m");
      } 
      else {
        // Space
        rawCodes[i - 1] = results->rawbuf[i]*USECPERTICK + MARK_EXCESS;
        Serial.print(" s");
      }
      Serial.print(rawCodes[i - 1], DEC);
  }
  Serial.println("");
  //Print treba izbrisati posel testiranja
}

boolean recieve(){
  boolean returnVal;
  irrecv.enableIRIn();
  returnVal = irrecv.decode(&results);
  if(returnVal){
    storeCode(&results);
    irrecv.resume();
  }

  return returnVal;
}

//WIFI-------------------------------------------------------------------------
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

//POST check
int numberOfAvailableCodes(){return 0;}
//POST request
void postPowerCode(int* rawCodes){}
void postTempUpCode(int* rawCodes){}
void postTempDownCode(int* rawCodes){}
//Send IR code
void sendIRRawCode(int* rawCodes){}
//Timer
void setTimer(){}

#include <IRremote.h>
#include <ArduinoJson.h>

//Device
const int deviceID = 1;

int RECV_PIN = 2;
IRrecv irrecv(RECV_PIN);
decode_results results;
unsigned int rawCodes[RAWBUF]; // The durations if raw
int codeLen; // The length of the code

//Boolean for getting codes
boolean irRecieve = true;

void setup() {
  // initialize serial for debugging
  Serial.begin(115200);

  //JSON-----------------------------------
 /* const char* input = "{\"idea\":\"data\",\"data\":[1,2,3,4,5,6,7,8,9]}";
  StaticJsonDocument<200> doc;

  DeserializationError err = deserializeJson(doc,input);
  if(err){
    Serial.println("ERROR");
    Serial.println(err.c_str());
    return;
  }

  //Ovo koristimo da izvucemo kod iz JSONA!
  JsonArray array = doc["data"].as<JsonArray>();
  Serial.println(array.size());
  for(JsonVariant v : array) {
    Serial.println(v.as<int>());
  }

  //doc["id"] = serialized("[100,200]");;

  const char* sensor = doc["sensor"];
  //int* num = doc["data"];

  //Serial.println(sensor);
  serializeJson(doc, Serial); */

  //IR part---------------------------------
  irrecv.enableIRIn(); // Start the receiver

  /*if(numberOfAvailableCodes()==3){
    irRecieve= false;
  }*/

}

void loop() {
  
  if(irRecieve){
    Serial.println("IN");
    int numberOfRecievedCodes = 0;
    boolean again = true;
    //Prvi kod
    while(again){
      again = !recieve();
      //Serial.println(again);
      //ovde ide kod za slanje
    }
    makeJson("TempUp");
    delay(3000);
    numberOfRecievedCodes++;
    again=true;

    
    //Drugi kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    makeJson("TempDown");
    delay(3000);
    numberOfRecievedCodes++;
    again=true;

    
    //Treci kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    makeJson("Power");
    numberOfRecievedCodes++;
    
    if(numberOfRecievedCodes == 3){
      irRecieve = false;
    }
  }

  Serial.println("All codes stored!");
  while(true){};

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

void makeJson(char* commandName){
  size_t capacity = JSON_ARRAY_SIZE(125) + JSON_OBJECT_SIZE(3); //125 kao solidan broj mesta
  DynamicJsonDocument doc(capacity);

  doc["deviceID"] = 1;
  doc["code"] = commandName;
  JsonArray bits = doc.createNestedArray("bits");
  
  for(int i=0; i < codeLen; i++){
    bits.add(rawCodes[i]);
  }
  
  Serial.print("Array size = ");
  Serial.println(bits.size());
  serializeJsonPretty(doc, Serial);
  Serial.println();
  doc.clear();
  Serial.print("JsonDocument size = ");
  Serial.println(doc.memoryUsage());
}

void clearRawCodeBuffer(){
  for(int i = 0; i < RAWBUF; i++)
    rawCodes[i] = 0;
}

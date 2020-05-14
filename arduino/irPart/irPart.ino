#include <IRremote.h>
#include <ArduinoJson.h>
#include <avr/pgmspace.h>

int RECV_PIN = 2;
unsigned int rawCodes[RAWBUF]; // The durations if raw
int codeLen; // The length of the code
IRrecv irrecv(RECV_PIN);
decode_results results;

//Boolean for getting codes
boolean irRecieve = true;

void setup() {
  // initialize serial for debugging
  Serial.begin(115200);

  //JSON-----------------------------------
  const char* input = "{\"idea\":\"data\",\"data\":[1,2,3,4,5,6,7,8,9]}";
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
  serializeJson(doc, Serial);

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
    delay(1000);
    numberOfRecievedCodes++;
    again=true;
    
    //Drugi kod
    while(again){
      again = !recieve();
      //ovde ide kod za slanje
    }
    delay(1000);
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
  //irrecv.enableIRIn();
  returnVal = irrecv.decode(&results);
  if(returnVal){
    storeCode(&results);
    irrecv.resume();
  }

  return returnVal;
}

#include <IRremote.h>

IRsend irsend;

void setup() {
  Serial.begin(9600);
}

void loop() {
  delay(10000);
  //Power//
  irsend.sendNEC(0xE0E040BF, 32); //Power Code
  Serial.println("Power");
  delay(10000);
  
}

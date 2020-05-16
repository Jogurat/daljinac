#include <IRremote.h>

/* HOW TO WIRE UP LCD SCREEN LEFT TO RIGHT PIN WITH PINS ON TOP SIDE
 *  
 *  GND - VCC - POT MIDDLE - 12 - GND - 11 - NONE - NONE - NONE - NONE - 5 - 4 - 9 - 2 - VCC - GND
 *  
 *  POT MUST HAVE 5V AND GND ON IT AND CAN ROTATE THE KNOB TO CHANGE LCD CONTRAST
 */

int receiverpin = 4;

IRrecv irrecv(receiverpin);
decode_results results;


void setup() {
  pinMode(receiverpin, INPUT);
  Serial.begin(9600);
  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results))
  {
    Serial.println(results.value, HEX);
    irrecv.resume();
    delay(150);
  }
}

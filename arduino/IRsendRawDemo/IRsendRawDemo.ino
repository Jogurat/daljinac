/*
 * IRremote: IRsendRawDemo - demonstrates sending IR codes with sendRaw
 * An IR LED must be connected to Arduino PWM pin 3.
 * Version 0.1 July, 2009
 * Copyright 2009 Ken Shirriff
 * http://arcfn.com
 *
 * IRsendRawDemo - added by AnalysIR (via www.AnalysIR.com), 24 August 2015
 *
 * This example shows how to send a RAW signal using the IRremote library.
 * The example signal is actually a 32 bit NEC signal.
 * Remote Control button: LGTV Power On/Off. 
 * Hex Value: 0x20DF10EF, 32 bits
 * 
 * It is more efficient to use the sendNEC function to send NEC signals. 
 * Use of sendRaw here, serves only as an example of using the function.
 * 
 */


#include <IRremote.h>

IRsend irsend;

void setup()
{
  Serial.begin(9600);
}

void loop() {
  int khz = 40; // 38kHz carrier frequency for the NEC protocol
  unsigned int irSignal[] = {4500, 4450, 600,1650, 550,1650, 600,1650, 550,550, 550,550, 600,550, 550,550, 550,550, 550,1700, 550,1650, 550,1700, 550,550, 550,550, 550,550, 600,550, 550,550, 550,550, 550,1700, 550,550, 550,550, 550,550, 600,550, 550,550, 550,550, 550,1700, 550,550, 550,1650, 600,1650, 550,1650, 600,1650, 550,1650, 600,1650, 550}; //AnalysIR Batch Export (IRremote) - RAW
  
  irsend.sendRaw(irSignal, sizeof(irSignal) / sizeof(irSignal[0]), khz); //Note the approach used to automatically calculate the size of the array.
  Serial.print("Sent - ");
  Serial.println(irSignal[0]);

  delay(10000); //In this example, the signal will be repeated every 5 seconds, approximately.
}

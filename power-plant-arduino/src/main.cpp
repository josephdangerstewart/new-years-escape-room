#include <Arduino.h>

const char * puzzleCompleteMessage = "power puzzle complete";

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  delay(5000);
  Serial.println(puzzleCompleteMessage);
}

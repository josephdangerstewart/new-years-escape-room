#include <Arduino.h>

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  auto value = analogRead(A0);
  Serial.println(value);
  delay(1000);
}

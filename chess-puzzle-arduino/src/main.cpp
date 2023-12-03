#include <Arduino.h>

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  auto sensorValue = analogRead(A0);

  float voltage = sensorValue * (5.0 / 1023.0);

  Serial.print("sensor value: ");
  Serial.println(sensorValue);

  Serial.print("voltage: ");
  Serial.println(voltage);

  delay(500);
}

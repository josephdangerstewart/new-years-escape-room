#include <Arduino.h>

const int LOCK_PIN = A5;
void printMagnetSensor();

void setup()
{
  Serial.begin(9600);
  pinMode(LOCK_PIN, OUTPUT);
}

void loop()
{
  printMagnetSensor();
  Serial.println("Setting HIGH");
  digitalWrite(LOCK_PIN, HIGH);
  delay(5000);
  Serial.println("Setting LOW");
  digitalWrite(LOCK_PIN, LOW);
  delay(5000);
}

void printMagnetSensor()
{
  auto sensorValue = analogRead(A0);

  float voltage = sensorValue * (5.0 / 1023.0);

  Serial.print("sensor value: ");
  Serial.println(sensorValue);

  Serial.print("voltage: ");
  Serial.println(voltage);
}

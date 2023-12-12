#include <Arduino.h>

const int LOCK_PIN = A5;
void printMagnetSensor();
void unlockDoor();
void lockDoor();

void setup()
{
  Serial.begin(9600);
  pinMode(LOCK_PIN, OUTPUT);
}

void loop()
{
  delay(10000);
  unlockDoor();

  delay(5000);
  lockDoor();
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

void unlockDoor()
{
  Serial.println("Unlocking door");
  digitalWrite(LOCK_PIN, HIGH);
}

void lockDoor()
{
  Serial.println("Locking door");
  digitalWrite(LOCK_PIN, LOW);
}

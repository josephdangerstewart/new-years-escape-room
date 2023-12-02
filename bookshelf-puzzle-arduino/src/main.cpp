#include <Arduino.h>
#include <HCSR04.h>

UltraSonicDistanceSensor distanceSensor(2, 3);

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("New arduino project!");
  auto distance = distanceSensor.measureDistanceCm();
  Serial.println(distance);
  delay(1000);
}

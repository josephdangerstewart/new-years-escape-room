#include <Arduino.h>

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("New arduino project!");
  delay(1000);
}

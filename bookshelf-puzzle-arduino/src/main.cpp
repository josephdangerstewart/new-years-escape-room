#include <Arduino.h>
#include <HCSR04.h>

void lockDoor();
void unlockDoor();
bool isPuzzleSolved();

const int LOCK_PIN = A5;
const int SENSOR_COUNT = 3;

UltraSonicDistanceSensor distanceSensors[SENSOR_COUNT] = {
  UltraSonicDistanceSensor(2, 3),
  UltraSonicDistanceSensor(5, 6),
  UltraSonicDistanceSensor(8, 9)
};

bool isRunning = true;

void setup()
{
  Serial.begin(9600);
  pinMode(LOCK_PIN, OUTPUT);
  lockDoor();
}

void loop()
{
  if (!isRunning)
  {
    return;
  }


  if (isPuzzleSolved())
  {
    unlockDoor();
    isRunning = false;
  }
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

// Returns true if all distance sensors have an object within 5cm
bool isPuzzleSolved()
{
  for (auto i = 0; i < SENSOR_COUNT; i++)
  {
    auto sensor = distanceSensors[i];
    auto distance = sensor.measureDistanceCm();

    if (distance > 5 || distance <= 0)
    {
      return false;
    }
  }

  return true;
}

const circuits = [
  {
    id: 1,
    name: "4 way Traffic Lights",
    description:
      "A simple Arduino-based simulation of a four-way traffic intersection using red, yellow, and green LEDs, demonstrating timed signal sequencing and basic traffic control logic.",
    image: "/4waytrafficlights.png",
    url: "https://www.tinkercad.com/things/lpmhuHkQxCd-4-way-traffic-lights?sharecode=vTuXG8I7CQN7cIIeCs2gWN190_56ZmCDhCXf-d_yr5I",
    components: ["Arduino Uno R3", "Red/Yellow/Green LED", "220Ω Resistor"]
  },
  {
    id: 2,
    name: "Door Lock",
    description:
      "An Arduino-driven door lock circuit that allows access based on a user-entered password, integrating a keypad for input and a servo motor to control the locking mechanism, while illustrating basic decision-making logic, input verification, and real-time control of hardware components.",
    image: "/DoorLock.png",
    url: "https://www.tinkercad.com/things/248kurvxOXR-door-lock",
    components: ["Arduino Uno R3", "LCD 16x2(I2C)", "Keypad 4x4", "Buzzer", "Servo Motor"]
  },
];

const handleGetCircuits = () => {
  return circuits;
};

const handleGetCircuitById = (id) => {
  return circuits.find((circuit) => circuit.id === id);
};

export { handleGetCircuits, handleGetCircuitById };

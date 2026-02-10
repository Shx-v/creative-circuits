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
];

const handleGetCircuits = () => {
  return circuits;
};

const handleGetCircuitById = (id) => {
  return circuits.find((circuit) => circuit.id === id);
};

export { handleGetCircuits, handleGetCircuitById };

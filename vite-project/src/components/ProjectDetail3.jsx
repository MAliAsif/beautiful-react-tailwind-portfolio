export default function ProjectDetail2() {
  return (
    <>
<div className="w-full max-w-screen-lg mx-auto px-4 text-left text-black bg-white rounded-l mt-15">
     
{/* Project Title */}
      <h1 className="text-3xl font-bold  mt-2">
Battery Management System with Power and Energy Monitoring
      </h1>

{/* Project Intro */}
      <p className="text-justify mt-7">
        An embedded based system using Arduino Uno to monitor a 2-cell cylindrical
        battery pack (connected in series), capturing real-time voltage,
        current, temperature, power, and energy for diagnostics and health
        tracking.
      </p>
<h3 className="font-semibold text-lg mt-4">Complete System Block Diagram</h3>
<img
  src="/proj3Data/block.PNG"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[60%] mx-auto"

/>



      {/* Battery Pack Details */}
      <h3 className="font-semibold text-lg mt-4">🔋 Battery Pack</h3>
      <p className="text-justify">
        2 cylindrical Li-ion cells connected in series to simulate practical
        embedded energy systems and increase operating voltage.
      </p>

      {/* Microcontroller */}
      <h3 className="font-semibold text-lg mt-4">⚙️ Microcontroller</h3>
      <p className="text-justify">
        Arduino Uno — controls sensor operations, performs real-time
        computations, and displays output.
      </p>

      {/* Sensors */}
      <h3 className="font-semibold text-lg mt-4">📡 Sensors Used</h3>
      <p className="text-justify">
        • INA219 / ACS712 — Current sensing <br />
        • Voltage Divider or INA219 — Voltage measurement <br />
        • MAX6675 with K-type Thermocouple — Temperature tracking <br />
        • NTC Thermistor — Ambient or contact temperature measurement
      </p>

<div className="flex justify-center gap-4 mt-4">
  <div className="flex flex-col items-center w-[50%]">
    <img
      src="/proj3Data/halleffect.jpeg"
      alt="Hall Effect Sensor"
      className="rounded-lg border border-gray-300 shadow-md w-full"
    />
    <h3 className="font-semibold text-lg mt-2 text-center">Hall Effect Sensor</h3>
  </div>

  <div className="flex flex-col items-center w-[50%]">
    <img
      src="/proj3Data/voltage.jpeg"
      alt="Voltage Sensor"
      className="rounded-lg border border-gray-300 shadow-md w-full"
    />
    <h3 className="font-semibold text-lg mt-2 text-center">Voltage Sensor</h3>
  </div>
</div>




<div className="mt-4 text-center">
  <img
    src="/proj3Data/ard_max.jpeg"
    alt="MAX6675 with OLED"
    className="rounded-lg border border-gray-300 shadow-md w-[40%] mx-auto"
  />
  <h3 className="font-semibold text-lg mt-2">MAX6675 with OLED</h3>
</div>

      {/* Display */}
      <h3 className="font-semibold text-lg mt-4">🖥️ Display</h3>
      <p className="text-justify">
        OLED screen shows live voltage, current, power, temperature, and energy
        stats.
      </p>

<div className="mt-4 text-center">
  <img
    src="/proj3Data/ard_oled.jpeg"
    alt="MAX6675 with OLED"
    className="rounded-lg border border-gray-300 shadow-md w-[40%] mx-auto"
  />
  <h3 className="font-semibold text-lg mt-2">OLED with Arduino </h3>
</div>




      {/* Measurement Logic */}
      <h3 className="font-semibold text-lg mt-4">⚡ Power & Energy Calculation</h3>
      <p className="text-justify">
        • Power = Voltage × Current — Calculated on Arduino <br />
        • Energy = Σ(Power × Time) — Integrated in code over runtime
      </p>

      {/* Protocols */}
      <h3 className="font-semibold text-lg mt-4">🔌 Communication Protocols</h3>
      <p className="text-justify">
        • I²C — Used for OLED and INA219 <br />
        • SPI — For MAX6675 thermocouple module <br />
        • Analog — For thermistor and voltage divider inputs
      </p>

      {/* Firmware */}
      <h3 className="font-semibold text-lg mt-4">💻 Firmware</h3>
      <p className="text-justify">
        Developed in Embedded C++ using Arduino IDE. Efficient polling logic and
        real-time output rendering implemented.
      </p>




<div className="mt-6 text-center space-y-4">

 <a
    href="https://drive.google.com/file/d/1TqBxbMD5g9zzc2PrbeD-_31rB3g8jEhT/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Project Report
  </a>
  <br />

  <a
    href="https://github.com/MAliAsif/Real-Time-V2X-Communication-System-Design---FYP"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Github Repositry
  </a>
</div>
<br />
<br />
   </div>
    </>
  );
}
 
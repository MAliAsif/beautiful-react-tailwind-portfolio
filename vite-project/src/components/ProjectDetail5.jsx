export default function ProjectDetail2() {
  return (
    <>
<div className="w-full max-w-screen-lg mx-auto px-4 text-left text-black bg-white rounded-l mt-15">
      <h1 className="text-3xl font-bold mb-4">Ultrasonic Target Tracking System
</h1>


<h2 className="font-semibold text-lg mt-4">Ultrasonic Target Tracking System using PIC18F4550</h2>

  <p className="text-justify mt-2">
    This project involves developing a real-time Ultrasonic Target Tracking System using the PIC18F4550 microcontroller. 
    The system uses an HC-SR04 ultrasonic sensor to emit and receive waves, calculating the distance and tracking the position of a moving target. 
    The PIC microcontroller processes the sensor data and executes tracking algorithms to deliver accurate results.
  </p>

  <p className="text-justify mt-2">
    This system is applicable in areas such as robotics, surveillance, industrial automation, sports tracking, and assistive technology.
  </p>

  <h3 className="font-semibold text-lg mt-4">Core Functionality</h3>
  <ul className="list-disc ml-6 mt-2 text-justify">
    <li>Measures distance by calculating time-of-flight of ultrasonic waves.</li>
    <li>Real-time tracking of target motion.</li>
    <li>Distance data processed and displayed using embedded code.</li>
  </ul>

  <h3 className="font-semibold text-lg mt-4">Hardware Components</h3>
  <ul className="list-disc ml-6 mt-2 text-justify">
    <li>Ultrasonic Sensor (HC-SR04)</li>
    <li>PIC18F4550 Microcontroller</li>
    <li>Potentiometer</li>
    <li>Clock Oscillator</li>
  </ul>

  <h3 className="font-semibold text-lg mt-4">Proteus Simulation</h3>
  <p className="text-justify mt-2">
    Below is the snapshot of the Proteus simulation showing the ultrasonic sensor, PIC microcontroller, and supporting circuit connections used for virtual testing and validation.
  </p>
<img
  src="/proj5Data/prot.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4  border border-gray-300 shadow-md w-[60%] mx-auto"

/>


  <h3 className="font-semibold text-lg mt-4">Hardware Implementation</h3>
  <p className="text-justify mt-2">
    The image below shows the hardware implementation on a breadboard, including the ultrasonic sensor, microcontroller, and other components configured for real-world tracking.
  </p>

<img
  src="/proj5Data/circuit.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4  border border-gray-300 shadow-md w-[60%] mx-auto"

/>



<div className="mt-6 text-center space-y-4">

 
  <br />

  <a
    href="https://github.com/MAliAsif/Ultrasonic-Target-Tracking-System"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Github Repositry
  </a>
    <br />
  <br />

</div>


   </div>
    </>
  );
}
 
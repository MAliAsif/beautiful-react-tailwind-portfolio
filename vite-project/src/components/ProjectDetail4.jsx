export default function ProjectDetail2() {
  return (
    <>
<div className="w-full max-w-screen-lg mx-auto px-4 text-left text-black bg-white rounded-l mt-15">
      <h1 className="text-3xl font-bold mb-4">4-Bit Arithmetic Logic Unit (ALU) Design
</h1>

  <h3 className="font-semibold text-lg mt-4">Introduction</h3>
<p className="text-justify mt-2">
An Arithmetic Logic Unit (ALU) is the core component of a CPU responsible for performing arithmetic and logical operations. It plays a vital role in computer architecture by enabling data processing and decision-making within digital systems.
  </p>

  <h3 className="font-semibold text-lg mt-4">Project Overview</h3>
<p className="text-justify mt-2">
    The project involved the construction of an ALU on a breadboard and its simulation using Proteus software. Utilized a combination of multiplexers, logic gates, switches, ICs, and LEDs to implement the ALU. The ALU supported multiple arithmetic and logic operations, showcasing strong fundamentals in digital logic, circuit design, and embedded systems.
  </p>

<img
  src="/proj4Data/start.jpg"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[60%] mx-auto"

/>



  <h3 className="font-semibold text-lg mt-4">⚙️ Key Features & Components</h3>
<p className="text-justify mt-2">
    This project features a 4-bit ALU implemented using digital logic ICs and Proteus simulation. The design covers arithmetic, logical, and control operations, selected via a common select input and executed using modular blocks.
  </p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Input/Output Probes:</span> Inputs A & B which are both 4 bit numbers, provided using high or low voltage levels. A 3-bit select input (S2, S1, S0) chooses the operation. Results are displayed through output probes and LEDs.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Arithmetic Unit:</span> Addition/Subtraction via 7483 adder IC and XOR gates. Increment/Decrement operations are handled using 2’s complement logic.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Complement Circuits:</span> NOT gates and adder form 1's and 2's complements of A and B.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Bitwise Logic:</span> Four AND, OR, and XOR gates perform bitwise logic operations.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Comparator:</span> 7485 IC checks if A &gt; B, A &lt; B, or A = B.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Loader/Counter:</span> 74193 counter IC with multiplexer support for loading and sequential counting.
</p>

<p className="text-justify mt-2">
  <span className="font-semibold">→ Output Selector:</span> 4 × 8-to-1 multiplexers select the result based on operation code.
</p>


  <h3 className="font-semibold text-lg mt-7"> Operation Selection Table</h3>
<img
  src="/proj4Data/table.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4  border border-gray-300 shadow-md w-[40%] mx-auto"

/>


  <p className="text-justify mt-2">
    💡 <strong>Select Lines:</strong> Since there are 8 operations, the ALU uses 3 select lines (2³ = 8 combinations).
  </p>

  <h3 className="font-semibold text-lg mt-7">🧪 Proteus Simulation</h3>

  <p className="text-justify mt-2">
The snapshot below illustrates the ALU simulation in Proteus, highlighting input probes, functional blocks, and output LED's  </p>

  {/* Add your Proteus image here */}
<img
  src="/proj4Data/proteus.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4  border border-gray-300 shadow-md w-[60%] mx-auto"

/>



  <h3 className="font-semibold text-lg mt-7">🔧 Breadboard Hardware Implementation</h3>

  <p className="text-justify mt-2">
    📷 Following is the image of the implemented ALU on a breadboards using ICs, connected wires, and LEDs for output.
  </p>
<img
  src="/proj4Data/alu.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4  border border-gray-300 shadow-md w-[60%] mx-auto"

/>




<div className="mt-6 text-center space-y-4">

 <a
    href="https://docs.google.com/document/d/1TEiy2upHUEiE4nkuZNc_ZV5i-ovQkpRr/edit?usp=sharing&ouid=108889057123602446799&rtpof=true&sd=true"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Project Report
  </a>
  <br />


</div>
<br /> <br />

   </div>
    </>
  );
}
 
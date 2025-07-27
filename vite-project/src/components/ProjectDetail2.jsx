export default function ProjectDetail2() {
  return (
    <>
<div className="w-full max-w-screen-lg mx-auto px-4 text-left text-black bg-white rounded-l mt-15">
      <h1 className="text-3xl font-bold mb-4">RISC-Based Microcontroller Design (Verilog)
</h1>

<p className="mb-4 text-lg mt-8">
Designed and implemented a custom <strong>RISC-based microcontroller</strong> using Verilog, featuring:
</p>

<ul className="list-disc list-inside text-gray-700 mb-4">
        <li>4 general-purpose 16-bit registers</li>
        <li>Arithmetic, logical, and immediate operations</li>
        <li>Conditional & unconditional branching</li>
        <li>Flag management for control flow</li>
      </ul>

<h2 className="font-semibold text-lg mt-4">Introduction</h2>
<p className="text-justify">
Designed and implemented a custom microcontroller with the following key features:</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Instruction Pipeline:</strong> Load → Fetch → Decode → Execute stages managed by a dedicated Control Unit</li>
        <li><strong>Arithmetic & Logic Unit (ALU):</strong> Performs all arithmetic, logical, and immediate operations</li>
        <li><strong>Program Control:</strong> Includes a Program Counter for instruction flow and Program Memory for storage</li>
        <li><strong>Core Architecture:</strong> 4 general-purpose 16-bit registers and flag management for control flow</li>
      </ul>
      <p><em>Demonstrates strong understanding of digital logic, control flow, and low-level hardware design.</em></p>


<h2 className="font-semibold text-lg mt-4">Architecture</h2>
<p className="text-justify">
 The microcontroller design follows a pipelined architecture, divided into <strong>FETCH</strong>, <strong>DECODE</strong>, and <strong>EXECUTE</strong> stages.
</p>

<img
  src="/proj2Data/architecture.PNG"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[60%] mx-auto"

/>

<h3 className="font-semibold text-lg mt-4" >1. FETCH Stage</h3>
<p className="text-justify" >The FETCH stage is responsible for retrieving instructions from memory.</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
<li><strong>Program Counter (PC):</strong> Holds the address of the next instruction to be fetched.</li>
<li><strong>MUX1:</strong> Selects between incremented PC value and new address (for branches).</li>
<li><strong>Adder:</strong> Increments the Program Counter by 1.</li>
<li><strong>Program Memory (256x12 bit):</strong> Stores 12-bit instructions, accessed using PC.</li>
<li><strong>Instruction Register:</strong> Holds the fetched instruction temporarily before decoding.</li>
</ul>
<p className="text-justify" ><strong>Step-by-step FETCH operation:</strong></p>
<ol className="list-disc list-inside text-gray-700 mb-4"> 
<li>PC sends current address to Program Memory.</li>
<li>Program Memory returns the instruction.</li>
<li>Instruction is stored in the Instruction Register.</li>
<li>PC is incremented by 1 via Adder and MUX1 (unless a branch occurs).</li>
</ol>

<h3 className="font-semibold text-lg mt-4" >2. DECODE Stage</h3>
<p className="text-justify">The DECODE stage interprets the fetched instruction and prepares data for execution.</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
<li><strong>Control Logic:</strong> Decodes instruction and generates control signals.</li>
<li><strong>Data Memory (16x8 bit):</strong> Stores 8-bit data values for reading/writing.</li>
<li><strong>Data Register (4 x 16-bit):</strong> General-purpose registers for operands and results.</li>
</ul>
<p className="text-justify" ><strong>Step-by-step DECODE operation:</strong></p>
<ol className="list-disc list-inside text-gray-700 mb-4">
<li>Instruction from Instruction Register is sent to Control Logic.</li>
<li>Control Logic decodes the operation and operands.</li>
<li>Generates control signals for register/memory access.</li>
<li>Operands are read from Data Register or Data Memory as needed.</li>
</ol>

<h3 className="font-semibold text-lg mt-4" >3. EXECUTE Stage</h3>
<p className="text-justify">The EXECUTE stage performs the actual operation defined by the instruction.</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
<li><strong>MUX2:</strong> Selects ALU input from either Data Register or Data Memory.</li>
<li><strong>ALU:</strong> Executes arithmetic, logical, and immediate operations.</li>
<li><strong>Accumulator:</strong> Temporarily stores ALU result.</li>
<li><strong>Status Register (Flags):</strong> Updates flags like Zero, Carry, and Negative based on result.</li>
</ul>
<p className="text-justify"><strong>Step-by-step EXECUTE operation:</strong></p>
<ol className="list-disc list-inside text-gray-700 mb-4">
<li>Operands selected by MUX2 are passed to the ALU.</li>
<li>ALU performs operation as per control signals.</li>
<li>Result is stored in the Accumulator.</li>
<li>Status Register is updated according to result.</li>
</ol>

<h3 className="font-semibold text-lg mt-4" >Example: ADD R1, R2</h3>
<p className="text-justify">
A sample instruction <strong>ADD R1, R2</strong> adds the content of R2 to R1 and stores the result in R1.
</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
<li>Initial: PC points to ADD instruction, R1 = A, R2 = B</li>
</ul>
<ol className="list-disc list-inside text-gray-700 mb-4">
<li><strong>FETCH:</strong> PC sends address to Program Memory → Instruction loaded into Instruction Register → PC incremented.</li>
<li><strong>DECODE:</strong> Control Logic decodes ADD → Sends signals to fetch R1 and R2.</li>
<li><strong>EXECUTE:</strong> ALU adds A + B → Result stored in Accumulator → Written back to R1 → Flags updated.</li>
</ol>

 <h2 className="font-semibold text-lg mt-6">Instruction Set Architecture</h2>

 <p className="text-justify">
       The RISC microcontroller has a simple and organized instruction set that handles important calculations and control tasks used in embedded systems.There are 30 instructions in total. Each instruction is 12 bits and needs 3 clock cycles to
finish, i.e. FETCH stage, DECODE stage, and EXECUTE stage.
      </p>
<h3 className="font-semibold text-lg mt-4">1. Data Transfer Group</h3>
      <p className="text-justify">
        Enables easy movement of data between the Accumulator and Data Memory, and supports loading immediate values directly into the Accumulator.
        These instructions are essential for controlling how data flows within the system.
      </p>
 <h3 className="font-semibold text-lg mt-4">2. Arithmetic Group</h3>
      <p className="text-justify">
        Includes operations like addition, subtraction, increment, and decrement. Works with both memory and immediate operands.
        Handles flag updates (Zero, Carry, Sign, Overflow) for precise flow control and error handling.
      </p>

      <h3 className="font-semibold text-lg mt-4">3. Branching Group</h3>
      <p className="text-justify">
        Allows program flow control using unconditional jumps (GOTO) and conditional branches (JZ, JC, JS, JO) based on flag status.
        Enables flexible and dynamic instruction execution paths.
      </p>

      <h3 className="font-semibold text-lg mt-4">4. Logical Group</h3>
      <p className="text-justify">
        Offers bitwise logical operations (AND, OR, XOR), shift operations (SLL, SRL, SRA), circular shifts (CIRCSL, CIRCSR), and 2's complement.
        Useful for complex data processing and bit-level manipulation.
      </p>


      


<h3 className="font-semibold text-lg mt-6">Timing and State Transition</h3>
<img
  src="/proj2Data/state_trans.PNG"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[60%] mx-auto"

/>

<h3 className="font-semibold text-lg mt-4">Pipeline Overview</h3>
      <p className="text-justify">
        While one instruction is in its <strong>EXECUTE</strong> phase, the very next instruction is already being <strong>FETCHED</strong> from memory.
      </p>
      <p className="text-justify">
        Once fetched, it moves to <strong>DECODE</strong>, where the microcontroller figures out what to do.
      </p>
      <p className="text-justify">
        Then it goes to <strong>EXECUTE</strong> to perform the action.
      </p>
      <p className="text-justify">
        This overlapping ensures the microcontroller is always busy, making it efficient.
      </p>

      <h3 className="font-semibold text-lg mt-4">Processing States</h3>
      <p className="text-justify">
        The bottom part shows the states (<strong>LOAD</strong>, <strong>FETCH</strong>, <strong>DECODE</strong>, <strong>EXECUTE</strong>) as a cycle,
        explaining the order in which the microcontroller processes instructions.
      </p>
      <p className="text-justify">
        It starts by loading the program, then continuously fetches, decodes, and executes instructions in a loop.
      </p>



<h3 className="font-semibold text-lg mt-6">Verification using Sample Instruction Sets</h3>
      <p className="text-justify">
        The sample instruction set finds the largest of three numbers (5, 12, and 2). Simulation results confirm the correct output is stored in both the Accumulator and Data Memory. This logic can also be extended for bubble sort.
      </p>
<img
  src="/proj2Data/timing1.PNG"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[60%] mx-auto"

/>

<h3 className="font-semibold text-lg mt-6">RTL Diagram</h3>
<img
  src="/proj2Data/rtl.PNG"
  alt=""
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[90%] mx-auto"

/>



<div className="mt-6 text-center space-y-4">

 <a
    href="https://drive.google.com/file/d/1AE-uisHqTbRBO1FUJ7E7xeudWw7Gyxll/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Project Report
  </a>
  <br />

  <a
    href="https://github.com/MAliAsif/8-Bit-RISC-Microcontroller-Design"
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
 
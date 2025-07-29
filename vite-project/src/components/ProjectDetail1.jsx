import { Bold } from "lucide-react";

export default function ProjectDetail1() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 text-left text-black bg-white rounded-l mt-15">
      <h1 className="text-3xl font-bold mb-4">V2X Communications System Design (FYP)</h1>

      <p className="mb-4 text-lg">
Designed a real-time embedded IoT system enabling direct, low-latency wireless communication between vehicles for smarter and safer mobility.
   </p>

      <div className="flex gap-2 flex-wrap mt-2">
        {["Embedded C/C++", "Python", "GNU Radio", "Raspberry Pi", "SDR"].map((tag, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>


      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4 text-base leading-relaxed mt-6">
        <div>
          <h2 className="font-semibold text-lg">Problem Statement</h2>
          <p className="text-justify">
Most vehicles in Pakistan can't communicate with each other or nearby infrastructure. This makes it hard to get real-time traffic and safety updates, increasing the chances of accidents.

          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Proposed Solution</h2>
          <p className="text-justify">
We built a V2X system using ESP32 devices in vehicles and a Raspberry Pi at the roadside. It shares GPS and motion data in real-time using wireless links to improve road safety and traffic awareness.
     </p>
 <h2 className="font-semibold text-lg mt-6">Architecture Diagram</h2>
 <p className="text-justify">
  Our V2X system comprises of: 
    <ul className="list-disc list-inside mt-1 ml-4 text-sm">
  <li><span className="font-semibold">3 vehicle nodes</span> for exchange of gps, acceleration/speed data, alerting the driver based on this data </li>
  <li><span className="font-semibold">RSU (Road Side Unit) node</span> for transmitting traffic updates </li>
  <li><span className="font-semibold">A Back haul link </span> for gathering all the data at one place</li>
</ul>
  
  </p>
<img
  src="/proj1Data/Capture.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md"

/>

 <h2 className="font-semibold text-lg mt-6">Vehicle Node OBU Architecture</h2>
 <p className="text-justify">
   The vehicle node serves as an On-Board Unit (OBU), capturing real-time GPS and acceleration data which is then transmitted via the LoRa SX1278 transceiver.
  <ul className="list-disc list-inside mt-1 ml-4 text-sm">
  <li><span className="font-semibold">UART</span> – for interfacing the <span className="font-medium">Neo-6M GPS</span> module</li>
  <li><span className="font-semibold">I2C</span> – for interfacing the <span className="font-medium">MPU6050 accelerometer</span></li>
  <li><span className="font-semibold">SPI</span> – for communicating with the <span className="font-medium">LoRa SX1278 transceiver</span></li>
</ul>
  </p>

 <img
  src="/proj1Data/v_node.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"

/>
 <h3 className="font-semibold text-lg mt-6">PCB Unit for Node 1</h3>
 <img
  src="/proj1Data/Vehicle_Node_1_pcb.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"

/>
<p className="mt-2 text-justify">
Similarly the PCB units for Node 2 and Node 3 have been fabricated and used in this project.</p>

 <h2 className="font-semibold text-lg mt-6">RSU Architecture</h2>
 <p className="mt-2 text-justify">
  The RSU node uses a Raspberry Pi to analyze real-time traffic conditions from video input of a roadside, extracting congestion level frame-by-frame. This data is transmitted via GPIO to an ESP32, then wirelessly sent over LoRa to other nodes. 
</p>
 <img
  src="/proj1Data/rsu_node.jpeg"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"

/>
<p className="mt-2 text-justify">
  Additionally, a USRP B210 SDR transmits the traffic data using an OFDM-based GNU Radio transmitter, while a separate SDR receives, demodulates, and stores the recovered data for downstream use cases.
</p>
 <img
  src="/proj1Data/backhaul.PNG"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"

/>



 <h2 className="font-semibold text-lg mt-6">Complete Hardware</h2>
  <img
  src="/proj1Data/complete_hardware.jpg"
  alt="V2X Architecture Diagram"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"

/>

 <h2 className="font-semibold text-lg mt-6">Results</h2>
 <p className="mt-2 text-justify">
Following are the side-by-side results of Node 1 and Node 2, showing each node’s channel state. Both nodes successfully receive and display packets from the other three nodes.
 </p>
<div className="flex justify-center gap-4 mt-4">
  <img
    src="/proj1Data/node1_channel.PNG"
    alt="V2X Architecture Diagram 1"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
  <img
    src="/proj1Data/node2_channel.jpg"
    alt="V2X Architecture Diagram 2"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
</div>
 <p className="mt-2 text-justify">
Similarly each node displays the data received from other nodes via LoRa Network in real-time. </p>
 <p className="mt-2 text-justify">
Following is the test site setup for evaluating the Dynamic Source Routing (DSR) protocol.
 </p>

 <img
    src="/proj1Data/testsite.PNG"
    alt="V2X Architecture Diagram 1"
  className="mt-4 rounded-lg border border-gray-300 shadow-md w-[50%] mx-auto"
  />
  <h3 className="font-semibold text-lg mt-6">Dynamic Source Routing Results</h3>
   <p className="mt-2 text-justify">
    The goal of this protocol is to discover a route to the destination. In this case Node 1 is the Source, Node 4is the destination.Node 1 initiates a Route Request (RREQ), which is received by its nearby Node 2. Since Node 2 is not the destination, it forwards the request to the next node. This process continues until the request reaches the destination, Node 4. Upon receiving the RREQ, Node 4 generates a Route Reply (RREP) containing the discovered route. This reply is sent back along the reverse path and reaches Node 1.
 </p>

<div className="flex justify-center gap-4 mt-4">
  <img
    src="/proj1Data/req.PNG"
    alt="V2X Architecture Diagram 1"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
  <img
    src="/proj1Data/reply.jpg"
    alt="V2X Architecture Diagram 2"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
</div>
<p className="mt-8 text-justify">
The Node 2 and 3 are intermediate nodes, which accurately relay packets , until the destination id is matched at the Node 4.</p>

  <h3 className="font-semibold text-lg mt-6">OFDM Backhaul link Results</h3>
<p className="mt-2 text-justify">
  Below are the results of OFDM transmission and reception. The data is modulated into the transmitted signal and wirelessly sent. On the receiver side, the signal is received, demodulated, and the original data is successfully recovered and stored.
</p>
<div className="flex justify-center gap-4 mt-4">
  <img
    src="/proj1Data/ofdm_tx.PNG"
    alt="V2X Architecture Diagram 1"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
  <img
    src="/proj1Data/ofdm_rx.PNG"
    alt="V2X Architecture Diagram 2"
    className="rounded-lg border border-gray-300 shadow-md w-[50%]"
  />
</div>

<img
    src="/proj1Data/file_data.PNG"
    alt="V2X Architecture Diagram 1"
  className="mt-4  border-gray-300 shadow-md w-[50%] mx-auto"
  />
<div className="mt-6 text-center space-y-4">
  {/* Result Videos Link */}
  {/* <a
    href="https://drive.google.com/your-result-video-link"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Watch Result Videos
  </a> */}

  {/* Thesis Report Link */}
  <br />
  <a
    href="https://drive.google.com/file/d/1u3mIN538DehoRCMwVlJI4-QEmMFwDvqM/view?pli=1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    View Project Thesis Report
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

        </div>
      </div>
    </div>
  );
}
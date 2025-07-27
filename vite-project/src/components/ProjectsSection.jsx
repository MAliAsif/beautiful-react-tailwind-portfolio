import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "V2X Communication System Design (FYP)",
    description:
      "A real-time embedded IoT system for direct, low-latency wireless communication between vehicles",
    image: "/projects/project1.png",
    tags: ["Embedded C/C++", "Python", "GNU Radio", "Raspberry Pi", "SDR"],
    demoUrl: "/project/1",
    githubUrl: "https://github.com/MAliAsif/Real-Time-V2X-Communication-System-Design---FYP",
  },
  {
    id: 2,
    title: "8-Bit-RISC Microcontroller Design",
    description:
      "RISC Microcontroller with Pipelined Architecture and Instruction Set",
    image: "/proj2Data/risc.jpg",
    tags: ["Verilog", "Modelsim", "Quartus Prime"],
    demoUrl: "/project/2",
    githubUrl: "https://github.com/MAliAsif/8-Bit-RISC-Microcontroller-Design",
  },
  {
    id: 3,
    title: "Battery Management System with Power and Energy Monitoring",
    description:
      "Real-time monitoring of temperature, voltage, and current of battery cells",
    image: "/proj3Data/c.PNG",
    tags: ["Embedded C++", "Arduino IDE"],
    demoUrl: "/project/3",
    githubUrl: "https://github.com/MAliAsif/Battery-Management-System-with-Power-and-Energy-Monitoring",
  },
  {
    id: 4,
    title: "Design of 4-Bit Arithmetic Logic Unit (ALU)",
    description:
      "Practical 4-Bit ALU Design & Implementation",
    image: "/proj4Data/start.jpg",
    tags: ["Proteus"],
    demoUrl: "/project/4"
  },
    {
    id: 5,
    title: "Ultrasonic Target Tracking System",
    description:
      "Target Detection Using HC-SR04 & PIC18",
    image: "/proj5Data/cover.PNG",
    tags: ["Embedded C", "MPLAB-X-IDE"],
    demoUrl: "/project/5",
    githubUrl: "https://github.com/MAliAsif/Ultrasonic-Target-Tracking-System",
  }
];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
   Here are some of my projects that I have designed and implemented.  </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:cursor-pointer flex flex-col justify-between h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* ✅ View Detail Button using useNavigate */}
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="inline-block bg-primary text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition-colors"
                >
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MAliAsif"
          >
            Check My Github
          </a>
        </div>
      </div>
    </section>
  );
};

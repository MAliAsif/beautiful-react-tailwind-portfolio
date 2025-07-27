import { Briefcase, Code, User } from "lucide-react";
import { Radio } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Electrical Engineer
            </h3>

            <p className="text-muted-foreground ">
              I am an Electrical Engineering graduate from the National University of Sciences and Technology (NUST), specializing in embedded systems, IoT, and wireless technologies.
            </p>

            <p className="text-muted-foreground ">
I’m passionate about solving complex problems through collaboration, innovation, and continuous learning.            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1T3k0HkFKnzdY4spHiU59xkeoBBfkXN5k/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Embedded Firmware Development</h4>
                  <p className="text-muted-foreground">
                    Embedded C, C++, Verilog, real‑time systems, microcontroller optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
<Radio className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">IoT & Wireless Systems</h4>
                  <p className="text-muted-foreground">
Communication protocols, Software defined radios(SDRs), Mobile Communications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI‑Driven Hardware Integration</h4>
                  <p className="text-muted-foreground">
               AI/ML‑driven features for smart embedded and edge devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
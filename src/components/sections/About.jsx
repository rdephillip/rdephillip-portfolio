import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "WPF",
  ];

  const backendSkills = [
    "C#",
    "C++",
    "Go",
    "Node.js",
    "Python",
    "Lua",
    "SQL",
    "Rest API",
    "Windows",
    "Macintosh",
    "Linux",
    "Docker",
    "K8s",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I have over thirty years of building custom automations and tools
              that increased the productivity and efficiency of all
              organizational users. I have built thousands of systems that
              reduced manual processes to an absolute minimum so users could
              focus on innovative work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-trasnlate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-trasnlate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Information Technology</strong> - Capella
                  University (2024)
                </li>
                <li>
                  Software Engineering, Security, Databases, Project Management
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Senior Systems Engineer @ Calvert County Public Schools
                    (2016 - Present)
                  </h4>
                  <p>
                    Engineered and maintained custom backend tools, automation,
                    and APIs using PowerShell, C#, Python, and Go to automate
                    user management, system reporting, and data synchronization
                    across disparate systems.
                  </p>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Systems Administrator @ Calvert County Public Schools
                      (2007 - 2016)
                    </h4>
                    <p>
                      Managed a multi-building infrastructure of over 2,000
                      devices and 10 servers, ensuring consistent uptime and
                      user support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

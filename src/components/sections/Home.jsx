import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Roy DePhillip
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a software engineer with expertise in tool building and
            automation. I have an exceptional passion for creating tools which
            improve the efficiency and productivity of all users. I firmly
            believe we should only do something the hard way one time.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-700 text-orange-50 py-3 px-6 rounded font-medium transition relative overflow-hidden
          hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(126,42,12,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-400/50 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(126,42,12,0.4)] hover:bg-orange-400/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

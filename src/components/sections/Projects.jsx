import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-header">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-400/30 hover:shadow[0_2px_8px_rgba(126,42,12,0.22)]">
              <h3 className="text-xl font-bold mb-2">Extra Life Discord Bot</h3>
              <p className="text-gray-400 mb-3">
                Discord bot that relays donations and allows for command based
                query of the status of an Extra Life campaign. This is fully
                configurable, and can be easily containerized in docker.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Go",
                  "JSON",
                  "Discord API",
                  "CLI",
                  "Windows",
                  "Mac",
                  "Linux",
                  "TrueNAS Scale",
                  "Docker",
                ].map((tech, key) => (
                  <span key={key} className="tags">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  href="https://github.com/rdephillip/eldisc"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

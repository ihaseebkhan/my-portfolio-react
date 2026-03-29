import { useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import clipwiseImage from "/assets/clipwise.jpg";
import screenclipImage from "/assets/screenclip.jpg";
import safeshareImage from "/assets/safeshare.jpg";
import cmsImage from "/assets/cms.jpg";
import lmsImage from "/assets/lms.jpg";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
  {
    title: "Clipwise",
    description:
      "Safe and focused video sharing platform for educators; built and optimized core frontend features enabling distraction-free playback while adhering to creator rights and permission-based usage.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Playwright"],
    image:
      clipwiseImage,
  },
  {
    title: "ScreenClip",
    description:
      "Screenshot capture and annotation platform; built canvas-based editing features and a Chrome extension for capturing, annotating, and sharing web content.",
    techStack: ["React", "Redux","JavaScript", "Tailwind CSS", "Fabric.js", "Chrome Extensions"],
    image:
      screenclipImage,
  },
  {
    title: "SafeShare",
    description:
      "Widely used global platform for safely sharing YouTube and Vimeo videos in educational settings; implemented and maintained frontend UI flows to ensure clean, inappropriate-content-free viewing experiences.",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "RESTful APIs"],
    image:
      safeshareImage,
  },
  {
    title: "Knowledge Platform CMS",
    description:
      "Custom CMS for creating and managing e-learning lessons, quizzes, and educational games; developed scalable frontend modules and integrated APIs to support content creation workflows.",
    techStack: ["React", "Context API", "Redux", "JavaScript", "Tailwind CSS"],
    image:
      cmsImage,
  },
  {
    title: "Knowledge Platform LMS",
    description:
      "Learning portal for students and educators; built responsive interfaces for assessment access, progress tracking, and learning workflows.",
    techStack: ["Svelte", "SvelteKit", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    image:
      lmsImage,
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-bottom");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = containerRef.current?.querySelectorAll(".project-card");
    if (cards) {
      cards.forEach((card) => {
        observer.observe(card);
        card.classList.add("opacity-0");
      });
    }

    return () => {
      if (cards) {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlighting some of my recent work and technical achievements
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-morphism rounded-xl overflow-hidden hover-lift transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2 py-1 rounded-full neo-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

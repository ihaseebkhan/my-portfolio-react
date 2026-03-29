import { useRef, useEffect } from "react";
import restIcon from "/assets/rest-api.png";
import fabricIcon from "/assets/fabric-js.png";

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  name: string;
  technologies: TechItem[];
};

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Shadcn UI",
        icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Svelte",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      },
      {
        name: "Fabric.js",
        icon: fabricIcon,
      },
      {
        name: "Chrome Extensions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
      },
    ],
  },
  {
    name: "Testing",
    technologies: [
      {
        name: "Jest",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      },
      {
        name: "Vitest",
        icon: "https://vitest.dev/logo.svg",
      },
      {
        name: "React Testing Library",
        icon: "https://testing-library.com/img/octopus-128x128.png",
      },
      {
        name: "Playwright",
        icon: "https://playwright.dev/img/playwright-logo.svg",
      },
    ],
  },
  {
    name: "Backend / APIs",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "RESTful APIs",
        icon: restIcon,
      },
    ],
  },
  {
    name: "Build & Tooling",
    technologies: [
      {
        name: "Vite",
        icon: "https://vitejs.dev/logo.svg",
      },
      {
        name: "Webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      },
      {
        name: "Babel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
      },
      {
        name: "ESLint",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
      },
    ],
  },
  {
    name: "Cloud & Databases",
    technologies: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "DynamoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    name: "Version Control",
    technologies: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000",
      },
      {
        name: "Azure DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
    ],
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const children = containerRef.current?.querySelectorAll(".tech-item");
    if (children) {
      children.forEach((child) => {
        observer.observe(child);
        child.classList.add("opacity-0");
      });
    }

    return () => {
      if (children) {
        children.forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto grid gap-8 md:gap-12"
          ref={containerRef}
        >
          {techCategories.map((category, index) => (
            <div key={index} className="tech-item space-y-4">
              <h3 className="text-xl font-semibold text-foreground inline-block px-3 py-1 rounded-lg neo-blur">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="glass-morphism rounded-lg px-4 py-3 text-center hover-scale card-shine flex flex-col items-center justify-center gap-2"
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import { useRef, useEffect } from "react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const experienceItems: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Vitzo Limited",
    location: "Cheyenne, WY, USA",
    period: "August 2023 - November 2025",
    achievements: [
      "Developed and enhanced user-facing features for web applications using React, Redux, JavaScript/TypeScript, Tailwind CSS, Bootstrap, shadcn/ui, and Fabric.js across products such as ScreenClip, SafeShare, and ClipWise.",
      "Built a Chrome extension to capture, edit, and share screenshots, leveraging Fabric.js for canvas-based editing.",
      "Implemented pixel-accurate UI/UX designs from Zeplin and Figma, delivering intuitive and consistent user experiences.",
      "Improved application performance through code splitting, image optimization, extraction of shared logic into a common package, and effective use of memoization techniques.",
      "Added multilingual support to React applications using i18next, expanding accessibility and reach to a broader user base.",
      "Conducted code reviews on GitHub and the Beanstalk app, providing constructive feedback to improve code quality, consistency, and maintainability.",
      "Created end-to-end test suites using Playwright to ensure application reliability across critical user flows.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Knowledge Platform (Private) Limited",
    location: "Islamabad, Pakistan",
    period: "August 2020 - August 2023",
    achievements: [
      "Developed a scalable, cross-platform custom Content Management System (CMS) using React, Redux, and Tailwind CSS, enabling clients to create and manage e-learning lessons, quizzes, and educational games for a large and growing user base.",
      "Developed a Learning Management System (LMS) portal using Svelte and Bootstrap, enabling students and educators to access lessons, quizzes, and educational games, and track learning progress.",
      "Ensured CMS and LMS reliability through comprehensive end-to-end and integration testing across core workflows.",
      "Refactored existing code to improve readability and maintainability, resulting in a much faster development time.",
      "Authored detailed technical documentation for APIs, components, and workflows, accelerating onboarding and reducing long-term technical debt.",
    ],
  },
  {
    title: "Backend Engineer",
    company: "Anzen Private Limited",
    location: "Islamabad, Pakistan",
    period: "July 2019 - August 2020",
    achievements: [
      "Delivered backend features in a fast-paced startup, meeting tight deadlines and enabling rapid product iteration.",
      "Developed a scalable pub/sub backend using Node.js and MQTT protocol to enable seamless communication between IoT devices.",
      "Developed a React dashboard to visualize sensor data and system metrics for an IoT drip irrigation platform.",
      "Implemented the ELK stack (Elasticsearch, Logstash, Kibana) to track and visualize client activity on IoT devices, improving sales forecasting and identifying optimization opportunities.",
      "Configured and managed AWS cloud services to support IoT data processing and monitoring.",
      "Improved database efficiency and maintainability through MySQL query optimization, stored procedures, and reliable backup/restore processes.",
    ],
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const items = containerRef.current?.querySelectorAll(".experience-item");
    if (items) {
      items.forEach((item) => {
        observer.observe(item);
        item.classList.add("opacity-0");
      });
    }

    return () => {
      if (items) {
        items.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my career development and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="experience-item mb-12 relative pl-8 md:pl-12"
            >
              {/* Timeline connector */}
              {index < experienceItems.length - 1 && (
                <div className="absolute left-3 md:left-5 top-5 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>

              <div className="glass-morphism rounded-xl p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-accent px-3 py-1 rounded-full neo-blur inline-block">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownloadCV = () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const fileUrl = "/assets/Muhammad_Haseeb_Frontend_Engineer_Resume.pdf";

      if (isMobile) {
        // Create a real anchor element and simulate a tap
        const link = document.createElement("a");
        link.href = fileUrl;
        link.target = "_blank"; // Open in new tab for mobile behavior
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "Muhammad_Haseeb_Frontend_Engineer_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      toast({
        title: "Download started",
        description: "Your download has started successfully!",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an error downloading the CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => {
        observer.observe(child);
        child.classList.add("opacity-0");
      });
    }

    return () => {
      if (children) {
        Array.from(children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-28 z-10">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <div className="inline-block px-4 py-1 rounded-full neo-blur mb-6">
            <span className="text-lg font-medium text-accent">
              Frontend Engineer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight lg:leading-tight text-gradient mb-6">
            Crafting digital <br />
            experiences with code
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
            Hi, I’m Muhammad Haseeb, a Frontend Engineer with 6+ years of experience building scalable, high-performance web applications. I specialize in React, TypeScript, and Next.js, creating user-focused applications across SaaS, EdTech, and IoT domains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover-lift"
            >
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg glass-morphism text-foreground font-medium hover-lift"
            >
              Get In Touch
            </button>

            <button
              onClick={handleDownloadCV}
              className="flex justify-center px-6 py-3 rounded-lg neo-blur text-foreground font-medium hover-lift group relative"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Resume
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-muted-foreground"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

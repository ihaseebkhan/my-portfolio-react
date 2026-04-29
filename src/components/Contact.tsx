import { useRef, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, AlertCircle } from "lucide-react";
import Recaptcha from "./Recaptcha";
import { sendEmail, type EmailData } from "@/services/emailService";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!captchaVerified) {
      newErrors.captcha = "Please verify that you're not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendEmail(formData);

      if (response.success) {
        toast({
          title: "Message Sent",
          description: response.message,
          variant: "default",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setCaptchaVerified(false);
      } else {
        toast({
          title: "Error",
          description:
            response.message ||
            "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
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

    const elements = containerRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((el) => {
        observer.observe(el);
        el.classList.add("opacity-0");
      });
    }

    return () => {
      if (elements) {
        Array.from(elements).forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center" ref={containerRef}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-6">
            Let's Connect
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <a
              href="mailto:ihaseeb1995@gmail.com"
              className="glass-morphism rounded-xl p-6 text-center hover-lift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                ihaseeb1995@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/ihaseebkhan"
              className="glass-morphism rounded-xl p-6 text-center hover-lift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mx-auto mb-4 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">Muhammad Haseeb</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ihaseebkhan/"
              className="glass-morphism rounded-xl p-6 text-center hover-lift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mx-auto mb-4 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Muhammad Haseeb</p>
            </a>
          </div>

          {/* <div className="glass-morphism rounded-xl p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg neo-blur bg-secondary/50 border-0 focus:ring-2 focus:ring-accent/50 focus:outline-none ${
                      errors.name ? 'ring-2 ring-destructive' : ''
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg neo-blur bg-secondary/50 border-0 focus:ring-2 focus:ring-accent/50 focus:outline-none ${
                      errors.email ? 'ring-2 ring-destructive' : ''
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg neo-blur bg-secondary/50 border-0 focus:ring-2 focus:ring-accent/50 focus:outline-none resize-none ${
                    errors.message ? 'ring-2 ring-destructive' : ''
                  }`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <Recaptcha onVerify={setCaptchaVerified} />
              {errors.captcha && (
                <p className="text-xs text-destructive flex items-center gap-1 -mt-4">
                  <AlertCircle className="w-3 h-3" />
                  {errors.captcha}
                </p>
              )}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover-lift transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="glass-morphism rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-7xl font-display font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">This page doesn't exist</p>
        <a 
          href="/" 
          className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover-lift inline-block"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

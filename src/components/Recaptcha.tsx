
import { useRef, useState, useEffect } from 'react';

// This is a simple mock of a CAPTCHA component
// In a real application, you would integrate with reCAPTCHA or hCaptcha
const Recaptcha = ({ onVerify }: { onVerify: (verified: boolean) => void }) => {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  
  const handleClick = () => {
    if (verified) return;
    
    setClicked(true);
    setLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
      onVerify(true);
    }, 1000);
  };
  
  return (
    <div className="flex items-center gap-2 mb-4">
      <div 
        className={`w-6 h-6 border rounded flex items-center justify-center cursor-pointer transition-all duration-300 ${
          verified ? 'bg-green-500 border-green-600' : 'bg-background border-border'
        }`}
        onClick={handleClick}
      >
        {loading ? (
          <svg className="animate-spin w-4 h-4 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : verified ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : null}
      </div>
      <span className="text-sm text-muted-foreground">
        {verified 
          ? "Verification complete" 
          : loading 
            ? "Verifying..." 
            : "I'm not a robot"}
      </span>
    </div>
  );
};

export default Recaptcha;

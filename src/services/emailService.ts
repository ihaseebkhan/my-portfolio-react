import emailjs from "@emailjs/browser";

export type EmailData = {
  name: string;
  email: string;
  message: string;
};

// This uses EmailJS for frontend email sending without a backend
export const sendEmail = async (
  data: EmailData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email
    if (!data.email || !data.email.includes("@")) {
      return { success: false, message: "Invalid email address" };
    }

    // Create template parameters
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      to_email: "ihaseeb1995@gmail.com",
    };

    // Send email using EmailJS - replace with your actual service ID, template ID, and public key
    const response = await emailjs.send(
      "service_9vw3hs7", // Replace with your service ID
      "template_55wtrbi", // Replace with your template ID
      templateParams,
      "FWOgN_wfzSBdlbJJ-" // Replace with your public key
    );

    if (response.status === 200) {
      return {
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      };
    } else {
      return {
        success: false,
        message:
          "There was a problem sending your message. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
};

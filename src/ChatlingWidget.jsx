import { useEffect } from "react";

const ChatlingWidget = () => {
  useEffect(() => {
    // Set global configuration
    window.chtlConfig = { chatbotId: "8792643134" };

    // Avoid duplicate script injection
    if (!document.getElementById("chtl-script")) {
      const script = document.createElement("script");
      script.src = "https://chatling.ai/js/embed.js";
      script.async = true;
      script.setAttribute("data-id", "8792643134");
      script.id = "chtl-script";

      document.body.appendChild(script);
    }

    return () => {
    };
  }, []);

  return null;
};

export default ChatlingWidget;

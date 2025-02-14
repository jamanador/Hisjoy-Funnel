import { useEffect, useState } from "react";

const WhiteLabelMDForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      const script = document.createElement("script");
      script.src = "https://forms.whitelabelmd.com/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-242326285940963']",
            "https://forms.whitelabelmd.com/"
          );
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showForm]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Continue Questions
        </button>
      ) : (
        <iframe
          id="JotFormIFrame-242326285940963"
          title="HisJoy - New Style - Complete - Erectile Dysfunction 2.0"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.whitelabelmd.com/242326285940963"
          frameBorder="0"
          style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
          scrolling="no"
        />
      )}
    </div>
  );
};

export default WhiteLabelMDForm;

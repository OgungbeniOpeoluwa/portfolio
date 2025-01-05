import React, { useState } from "react";
import ContactForm from "../contactForm/contactForm";

const handleSocialClick = (platform: "linkedin" | "instagram" | "facebook" | "twitter") => {
   const socialLinks: Record<string, string> = {
     linkedin: "https://www.linkedin.com/in/opeoluwa-ogungbeni-578411146/", // Replace with your LinkedIn profile or message link
     instagram: "https://www.instagram.com/direct/new/", // Opens Instagram Direct
     facebook: "https://www.facebook.com/messages/t/your-profile-id", // Replace with your Facebook Messenger thread
     twitter: "https://twitter.com/messages/compose?recipient_id=your-recipient-id", // Replace with the Twitter recipient ID
   };
 
   const link = socialLinks[platform];
   if (link) {
     window.open(link, "_blank"); // Opens the social media link in a new tab or app
   }
 };
 

const ContactMe = () => {
  const [modalType, setModalType] = useState<"phone" | "email" | "social" | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<"linkedin" | "instagram" | "facebook" | "twitter" | null>(null);

  const phoneNumber = "+2347066221008"; // Replace with the actual phone number
  const defaultMessage = "Hello, I'd like to get in touch!"; // Replace with the default message

  const openModal = (type: "phone" | "email" | "social") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedSocial(null);
  };

  return (
    <div className="bg-gray-100 p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
      <div className="space-x-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => openModal("phone")}
        >
          Call or Text
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => openModal("email")}
        >
          Send Email
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => openModal("social")}
        >
          Social Media
        </button>
      </div>

      <div>
        <ContactForm />
      </div>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
            {modalType === "phone" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Contact via Phone</h3>
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                >
                  Call
                </a>
                <a
                  href={`sms:${phoneNumber}?body=${encodeURIComponent(defaultMessage)}`}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Send Text
                </a>
              </div>
            )}

            {modalType === "email" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Contact via Email</h3>
                <a
                  href="mailto:your-email@example.com"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send Email
                </a>
              </div>
            )}

            {modalType === "social" && !selectedSocial && (
              <div>
                <h3 className="text-xl font-bold mb-4">Choose a Social Platform</h3>
                <div className="flex flex-col justify-center space-y-4">
                  <button
                    onClick={() => handleSocialClick("linkedin")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleSocialClick("instagram")}
                    className="bg-pink-500 text-white px-4 py-2 rounded"
                  >
                    Instagram
                  </button>
                  <button
                    onClick={() => handleSocialClick("facebook")}
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleSocialClick("twitter")}
                    className="bg-blue-400 text-white px-4 py-2 rounded"
                  >
                    Twitter
                  </button>
                </div>
              </div>
            )}

            {modalType === "social" && selectedSocial && (
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Send a Message on {selectedSocial.charAt(0).toUpperCase() + selectedSocial.slice(1)}
                </h3>
                <button
                  onClick={() => alert("Redirecting to social media platform...")}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send Message
                </button>
              </div>
            )}

            <button
              onClick={closeModal}
              className="text-red-500 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMe;

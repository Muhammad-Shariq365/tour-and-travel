import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PdfViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfUrl = location.state?.pdfUrl;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!pdfUrl) {
      navigate(-1); // Redirect back if no PDF URL is available
    } else {
      setIsModalOpen(true); // Open the modal when the component mounts
    }
  }, [pdfUrl, navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customCloseButton", // Custom close button class
        }}
        styles={{
          modal: {
            maxWidth: "90%", // Use a smaller percentage to avoid too large modals
            width: "100%",
            height: "auto",
            padding: "0",
            borderRadius: "10px", // Rounded corners for a more modern look
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow for elevation
            position: "relative", // Ensure the modal has a context for positioning the close button
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker overlay
          },
        }}
      >
        <div className="relative w-full h-[80vh] sm:h-[95vh] overflow-hidden">
          {/* PDF Viewer */}
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            className="w-full h-full border-none rounded-lg shadow-lg"
          />
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 focus:outline-none z-10"
            style={{
              position: "absolute",
              top: "10px", // Position the button at the top
              right: "10px", // Position the button at the right
              zIndex: 100, // Ensure it's above the PDF content
            }}
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PdfViewer; 
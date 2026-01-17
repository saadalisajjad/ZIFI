import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";

const Modal = ({ isOpen, onClose, children, displayLayout }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
  className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[1000] h-full overflow-scroll
             uppercase font-light text-[#8f8f8f] tracking-[0.45em]
             text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px]"


      onClick={onClose}
    >
      {/* {displayLayout && <div className="px-[18px] pt-[17px] lg:px-[50px] lg:pt-[40px] w-full"> <Navbar displayLayout={displayLayout} /></div>} */}
      <div
        className="bg-transparent relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
        >
        {displayLayout && <Navbar displayLayout={displayLayout} className="!h-auto" />}
        {children}
      {displayLayout && <Footer className="!h-auto" displayLayout={displayLayout} />}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import { useState } from "react";
import Modal from "../../components/AI/Ai-Assistent/Modal";

function AiMini() {
    const [isOpen, setIsOpen] = useState(true);
    function onClose() {
        setIsOpen(false);
    }
  return (
    <>
      <div onClick={() => setIsOpen(true)} className="flex items-center justify-center fixed bottom-5 right-5 w-14 h-14 rounded-full hover:cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-white"
        >
          <path d="M12 18V5"></path>
          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
        </svg>
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default AiMini;

import React from "react";

const Overlay = ({ children, onClose }) => {
    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-sm z-50">
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default Overlay;

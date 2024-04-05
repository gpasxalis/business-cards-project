import React from "react";
import { CloseOutlined } from "@mui/icons-material";
import "./ModalStyle.css";


export default function Modal({ isOpen, onClose, children  }) {
  if (!isOpen) return null;

  return (
    <div id="modal">
      <div className="modal--close-section">
        <div className="modal--close">
          <div className="modal--close-icon">
            <CloseOutlined onClick={onClose} />
          </div>
        </div>
      </div>
      <div className="modal--view">
        {children}
      </div>
    </div>
  );
}

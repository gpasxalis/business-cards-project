import React from "react";
import "./ModalStyle.css";
import { CloseOutlined } from "@mui/icons-material";

export default function Modal({ isOpen, onClose, isViewItem }) {
  if (!isOpen) return null;

  console.log({ isViewItem });
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
        <h1>This is a test</h1>
      </div>
    </div>
  );
}

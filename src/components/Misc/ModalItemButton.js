import React from "react";
import { CopyAllOutlined } from "@mui/icons-material";
import "./ModalItemStyle.css"

export default function ModalItemButton({isOpen}) {
  if (!isOpen) return null;
  
  return (
    <>
      <div className="modal--view-section" id="modalButtonSection">
        <h2 className="modal--title" >
          Copy and send the URL
        </h2>
				<div>
          <div id="copyIcon" className="copy--icon">
            <div className="modal--view-icon">
              <CopyAllOutlined />
            </div>
            <p>
              Copy URL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}



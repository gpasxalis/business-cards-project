import { React } from "react";
import { CopyAllOutlined } from "@mui/icons-material";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import "./ModalItemStyle.css"

export default function ModalItemButton({isOpen, copyText, onCopy}) {
  if (!isOpen) return null;


  const url = window.location.href
  
  return (
    

    <>
      <div className="modal--view-section" id="modalButtonSection">
        <h2 className="modal--title" >
          Copy and send the URL
        </h2>
				<div>
          <CopyToClipboard text={url} >
            <div id="copyIcon" className="copy--icon" onClick={onCopy}>
              <div className="modal--view-icon">
                <CopyAllOutlined />
              </div>
              <p>
                {copyText}
              </p>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
}



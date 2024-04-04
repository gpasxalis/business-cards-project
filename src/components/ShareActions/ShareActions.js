import React from "react";
import { ShareOutlined, QrCodeOutlined } from "@mui/icons-material";

import "./ShareActionsStyle.css";

export default function ShareActions({ onClick }) {
  return (
    <>
      <div className="share--actions" id="shareActions">
        <div>
          <div id="nodesIcon" className="nodes--icon shareIcons">
            <div className="share--icons">
              <ShareOutlined onClick={onClick} />
            </div>
          </div>
          <div id="showQR" className="show--qr shareIcons">
            <div className="share--icons">
              <QrCodeOutlined onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

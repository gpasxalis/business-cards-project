import React from "react";
import QRCode from 'react-qr-code';
import "./ModalItemStyle.css"

export default function ModalItemQr({isOpen}) {
  if (!isOpen) return null;

  const url = window.location.href

  return (
    <>
    <div className="qr--view">
      <div className="qr--item">
        <QRCode value= {url} />
      </div>
      <h2 className="qr--title">Scan the QR Code</h2>
      <p className="qr--text">to view my Business Card on another device</p>
    </div>

    </>
  );
}



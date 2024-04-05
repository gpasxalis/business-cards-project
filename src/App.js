import {React, useState} from "react";
import Footer from "./components/Footer/Footer";
import BCard from "./components/BCard";
import Modal from "./components/Misc/Modal";
import ModalItemButton from "./components/Misc/ModalItemButton";
import ModalItemQr from "./components/Misc/ModalItemQr";
import ShareActions from "./components/ShareActions/ShareActions";

export default function App() {
  const [open, setOpen] = useState(false);
  const [modalButton, setModalButton] = useState(false);
  const [modalQr, setModalQr] = useState(false);
  const [copyText, setCopyText] = useState("Copy URL");
 
  const handleClose = () => {
    setOpen(false);
    setModalButton(false);
    setModalQr(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleModalButtonOpen = () => {
    setModalButton(true);
  };

  const handleModalQrOpen = () => {
    setModalQr(true);
  };

  const handleCopy = () => {
    setCopyText("Copied")
  };


  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalItemButton isOpen={modalButton} copyText={copyText} onCopy={handleCopy} />
        <ModalItemQr isOpen={modalQr} />
      </Modal>
      <ShareActions onAction={handleOpen} onButtonOpen={handleModalButtonOpen} onQrOpen={handleModalQrOpen} />
      <div className="card">
        <BCard />
        <Footer />
      </div>
    </>
  );
}

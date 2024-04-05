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



  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalItemButton isOpen={modalButton} />
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

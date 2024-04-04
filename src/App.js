import React from "react";
import Footer from "./components/Footer/Footer";
import BCard from "./components/BCard";
<<<<<<< HEAD


export default function App() {
	return (
		<div className="card">
			<BCard />
      		<Footer />
    	</div>
  	);
=======
import ShareActions from "./components/ShareActions/ShareActions";
import Modal from "./components/Misc/Modal";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleClose} />
      <ShareActions onClick={handleOpen} />
      <div className="card">
        <BCard />
        <Footer />
      </div>
    </>
  );
>>>>>>> f44f8d1 (Updates)
}

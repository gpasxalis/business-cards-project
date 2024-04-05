import React from "react";
import Footer from "./components/Footer/Footer";
import BCard from "./components/BCard";
import Modal from "./components/Misc/Modal";
import ShareActions from "./components/ShareActions/ShareActions";

export default function App() {
  return (
    <>
      <Modal />
      <ShareActions />
      <div className="card">
        <BCard />
        <Footer />
      </div>
    </>
  );
}

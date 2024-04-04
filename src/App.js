import React from "react";
import Footer from "./components/Footer/Footer";
import BCard from "./components/BCard";
import Modal from "./components/Misc/Modal";

export default function App() {
  return (
    <>
      <Modal />
      <div className="card">
        <BCard />
        <Footer />
      </div>
    </>
  );
}

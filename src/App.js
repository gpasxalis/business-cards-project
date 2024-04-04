import React from "react";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

export default function App() {
  return (
    <div className="card">
      <MainSection />
      <Featured />
      <Footer />
    </div>
  );
}

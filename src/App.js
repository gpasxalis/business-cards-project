import React from "react";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Interests from "./components/Interests";
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

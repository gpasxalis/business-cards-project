import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

export default function App() {
  return (
    <div className="card">
      <Intro />
      <Featured />
      <Footer />
    </div>
  );
}

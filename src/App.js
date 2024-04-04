import React from "react";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";

export default function App() {
  return (
    <div className="card">
      <Intro />
      <Featured />
      <Footer />
    </div>
  );
}

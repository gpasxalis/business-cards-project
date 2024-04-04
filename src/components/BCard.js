import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import InfoCard from "./InfoCard/InfoCard";
import OnlineMenu from "./OnlineMenu/OnlineMenu"
import Header from "./Header"


export default function BCard() {
	return (
        <div className="main--section">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<InfoCard />}></Route>
                </Routes>
                <Routes>
                    <Route path="/onlinemenu" element={<OnlineMenu />}></Route>
                </Routes>
            </Router>
        </div>
  	);
}

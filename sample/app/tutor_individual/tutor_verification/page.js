"use client"

import "./styles/main.css";
import LeftPanel from './Components/LeftPanel/LeftPanel';
import CenterSection from "./Components/center-section/CenterSection.jsx";
import TopBar from "../GlobalComponents/TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Home() {
  const selectedSection = useSelector(state => state.tutorVerificationReducer.selectedSection);
  console.log(selectedSection)
  return (
    <main className="main">
      <LeftPanel />
      <div className="content">
      <div className="top-container">
        <span className="line line1">Having Trouble?</span>
        <span className="line line2">Need Help!</span>
      </div>
        <CenterSection />
      </div>
    </main>
  )
}

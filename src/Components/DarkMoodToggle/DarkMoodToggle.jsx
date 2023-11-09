"use client";
import { useContext } from "react";
import "./DarkMoodToggle.css";
import { ThemeContext } from "@/context/ThemeContext";
export default function DarkMoodToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="toggle-container" onClick={toggle}>
      <div className="toggle-icon">🌙</div>
      <div className="toggle-icon">🌚</div>
      <div
        className="toggle-switch"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}

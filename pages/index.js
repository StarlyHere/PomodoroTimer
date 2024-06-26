import Image from "next/image";
import { Inter } from "next/font/google";
import Timer from "@/components/timer";
import Settings from "@/components/Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";


export default function Home() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes,setWorkMinutes] = useState(45);
  const[breakMinutes, setBreakMinutes] = useState(15);




  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        
      }}>
      {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>
      
    </main>
    
  );
}

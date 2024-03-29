import SettingsContext from "@/pages/SettingsContext"
import { useContext } from "react"
import ReactSlider from "react-slider"
import BackButton from "./BackButton";



export default function Settings() {
    
    const settingsInfo = useContext(SettingsContext);

  return (
    <div className='text-left'>
        <label>Work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}

        />
        <label>Break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
        className={'greenSlider'}
        thumbClassName={'greenThumb'}
        trackClassName={'greenTrack'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}

        />
        <div className="text-center mt-5">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
        </div>
        
        
    </div>
  )
}

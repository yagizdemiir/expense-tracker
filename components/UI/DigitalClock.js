import { useState } from "react";
import './DigitalClock.css'

const DigitalClock = () =>{
    
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1>Now its {ctime}</h1>
}
export default DigitalClock;

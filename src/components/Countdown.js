import React, { useEffect, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import calculateTimeLeft from "../utils/calculateTimeLeft";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
 
    if (updatedTimeLeft.total <= 0) {
     clearInterval(interval); // Stop the interval
     setIsTimeUp(true); // Mark the timer as expired
     playSound(); // Play the alarm sound
  }
}, 1000);

return () => clearInterval(interval);
}, [targetDate]);


 // Function to play sound
 const playSound = () => {
  const audio = new Audio('/sound.Mp3'); 
  audio.play();
};


  if (timeLeft.total <= 0) {
    return <h4 className="text-danger">Time's up!</h4>;
  }

  if (isTimeUp) {
    return (
      <div className="time-up">
        <h4 className="text-danger">Time's up!</h4>
      </div>
    );
  }

  return <TimerDisplay timeLeft={timeLeft} />;
}
export default Countdown;


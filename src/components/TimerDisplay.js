import React from "react";

function TimerDisplay({ timeLeft }) {
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">Countdown</h5>
        <p className="card-text">
          {days}d {hours}h {minutes}m {seconds}s
        </p>
      </div>
    </div>
  );
}

export default TimerDisplay;

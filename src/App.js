import React, { useState } from "react";
import Countdown from "./components/Countdown";
import AddTimerForm from "./components/AddTimerForm";
import "./styles/App.css";

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (timer) => {
    setTimers([...timers, timer]);
  };

  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Countdown Timer</h1>
      <AddTimerForm onAddTimer={addTimer} />
      <div className="row mt-5">
        {timers.map((timer, index) => (
          <div key={index} className="col-md-4">
            <Countdown targetDate={timer.targetDate} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

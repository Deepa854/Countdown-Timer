import React, { useState } from "react";

function AddTimerForm({ onAddTimer }) {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) return alert("Please select a valid date and time.");
    onAddTimer({ targetDate: new Date(date) });
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Select Target Date & Time</label>
        <input
          type="datetime-local"
          id="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Timer</button>
    </form>
  );
}

export default AddTimerForm;

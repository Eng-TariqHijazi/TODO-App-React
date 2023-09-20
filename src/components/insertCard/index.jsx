import React from "react";
import "./style.css";
import Button from "../button";
function InsertCard({ handleChange, onClick, value }) {
  return (
    <div className="workSpace">
      <input
        type="text"
        placeholder="What would you like to do?"
        onChange={handleChange}
        value={value}
      />
      <Button title={"Add"} className={"btn-red"} onClick={onClick} />
    </div>
  );
}

export default InsertCard;

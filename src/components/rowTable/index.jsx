import Button from "../button";
import React from "react";
import "./style.css";
import { FaBeer } from "react-icons/fa";
const RowTable = ({ text, button, keys, deleteItem, completed }) => {
  return (
    <div className="row" key={keys}>
      <div className="content-table">
        <p className="text i1">{text}</p>
        <div className={"i2"}>
          <Button
            className={`btn-row ${button && "completed"}`}
            title={button ? "completed" : "Pending"}
            onClick={() => completed(keys)}
          />
        </div>
        <div className="i3">
          <div className="icon" onClick={() => deleteItem(keys)}>
            <FaBeer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RowTable;

import React, { useState } from "react";
import "./style.css";
import InsertCard from "../../components/insertCard";
import { allData } from "../../utils/data";
import RowTable from "../../components/rowTable";
const Todo = () => {
  const [data, setData] = useState(allData);
  const [value, setValue] = useState("");

  const insert = () => {
    if (value.length > 1) {
      setData((pre) => [
        ...pre,
        {
          userId: 1,
          id: Math.random(),
          title: value,
          completed: false,
        },
      ]);
      setValue("");
    } else {
      alert(
        "Please select a value for this transaction to complete successfully"
      );
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteItem = (e) => {
    let arr = data.filter((item) => {
      return item.id !== e;
    });
    setData(arr);
  };

  const completed = (key) => {
    data.forEach((item) => {
      if (item.id === key && !item.completed) {
        deleteItem(key);
        setData((pre) => [
          ...pre,
          {
            userId: item.userId,
            id: item.id,
            title: item.title,
            completed: true,
          },
        ]);
      }
    });
  };

  return (
    <div className="todo">
      <header></header>
      <div className="content">
        <h1>TODO List</h1>
        <InsertCard
          onClick={insert}
          handleChange={handleChange}
          value={value}
        />
        <div className="workSpace left">
          <div className="header">
            <h2>Todo List</h2>
          </div>
          <div className="table-header">
            <p className="i1">List</p>
            <p className="i2">Status</p>
            <p className="i3">Close</p>
          </div>
          <div className="list">
            {data.map((item) => {
              return (
                <RowTable
                  text={item.title}
                  button={item.completed}
                  keys={item.id}
                  deleteItem={deleteItem}
                  completed={completed}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

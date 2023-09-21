import React, { useEffect, useState } from "react";
import "./style.css";
import InsertCard from "../../components/insertCard";
import RowTable from "../../components/rowTable";
import axios from "axios";
import Button from "../../components/button";
const Todo = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(5);
  const showIncrease = () => {
    setLength((e) => e + 5);
  };
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("Data:", response.data);
      setData(response.data.slice(0, length));
    } catch (error) {
      console.error("An error message:", error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, [length]);
  const [value, setValue] = useState("");

  const insert = () => {
    if (value.length > 1) {
      setData((pre) => [
        {
          userId: 1,
          id: Math.random(),
          title: value,
          completed: false,
        },
        ...pre,
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
    // setLength(arr.length);
  };

  const completed = (key) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === key) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
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
          <Button
            className={length < 200?"center":"none"}
            title={"See More"}
            onClick={showIncrease}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;

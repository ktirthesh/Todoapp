import React, { useEffect, useState } from "react";
import {
  deleteTodo,
  getallTodo,
  setTodo,
  updateTodo,
} from "../../services/Todoservies";
import { TaskList } from "../TaskList/TaskList";
import { Createtask } from "../Createtask/Createtask";

function Dashboard() {
  const [Todolist, setTodolist] = useState([]);
  const createTask1 = async (data) => {
    await setTodo(data)
      .then((res) => {
        console.log("is data set:", res.data);
        getTodo();
      })
      .catch(() => console.log("error"));
  };
  const getTodo = async () => {
    await getallTodo()
      .then((res) => {
        setTodolist(res.data);
      })
      .catch(() => console.log("error"));
  };
  useEffect(() => {
    getTodo();
  }, []);
  const updateRecord = (data) => {
    updateTodo(data)
      .then((res) => {
        console.log("is data set:", res.data);
        getTodo();
      })
      .catch(() => console.log("error"));
  };
  const deleterecord = async (data) => {
    await deleteTodo(data)
      .then((res) => {
        console.log("is data set:", res.data);
        getTodo();
      })
      .catch(() => console.log("error"));
  };
  return (
    <div>
      <Createtask createTask={(data) => createTask1(data)} />
      <TaskList
        Todolist={Todolist}
        updateRecord={(data) => updateRecord(data)}
        deleterecord={(data) => deleterecord(data)}
      />
    </div>
  );
}

export default Dashboard;

import axios from "axios";
let url = "http://127.0.0.1:8000";
export const getallTodo = async () => {
  return await axios.get(url + "/task-list/");
};

export const setTodo = async (data) => {
  return await axios.post(url + "/task-create/", {
    title: data,
    completed: false,
  });
};
export const updateTodo = async (data) => {
  return await axios.post(url + `/task-update/${data.id}`, {
    title: data.title,
    completed: data.completed,
  });
};

export const deleteTodo = async (data) => {
  return await axios.delete(url + `/task-delete/${data.id}/`);
};

import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  }

  const removeTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Failed to remove task:", error);
    }
  };

  const updateTask = async (taskId, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? data : task))
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  }
  return {
    tasks,
    addTask,
    removeTask,
    updateTask
  };
}
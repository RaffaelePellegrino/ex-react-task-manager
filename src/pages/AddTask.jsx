import { useState, useRef, useMemo, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const symbol = "!@#$%^&*()_+[]{}|;':\",.<>?`~";

export default function AddTask() {
  const { addTask } = useContext(GlobalContext);

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();
  const taskNameRegex = useMemo(() => {
    if (!taskTitle) {
      return null;
    } else if ([...taskTitle].some((char) => symbol.includes(char))) {
      return "il titolo del task non può contenere caratteri speciali";
    }
  }, [taskTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskTitle || taskNameRegex) {
      console.error("Errore: titolo del task non valido o vuoto");
      return;
    }
    const task = {
      title: taskTitle,
      description: descriptionRef.current.value,
      status: statusRef.current.value,
      createdAt: new Date().toDateString(),
    };
    console.log("Task da aggiungere:", task);

    try {
      await addTask(newTask);
      alert("Task creata corretamente!");
      setTaskTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };

  const nameError = useMemo(() => {
    if (!taskName.trim()) {
      return "E' obbligatorio inserire un titolo per la task!";
    } else if ([...taskName].some((char) => symbols.includes(char))) {
      return "Il titolo non deve contenere simboli!";
    } else {
      return "";
    }
  }, [taskName]);
}
return (
  <div>
    <h1>Aggiungi task</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></input>
        {taskNameRegex && <p style={{ color: "red" }}>{taskNameRegex}</p>}
      </label>
      <label>
        Descrizione:
        <textarea ref={descriptionRef}></textarea>
      </label>
      <label>
        Stato:
        <select ref={statusRef} defaultValue={"todo"}>
          <option value="todo">Da fare</option>
          <option value="in-progress">In corso</option>
          <option value="done">Fatto</option>
        </select>
      </label>
      <button type="submit">Aggiungi Task</button>
    </form>
  </div>
);

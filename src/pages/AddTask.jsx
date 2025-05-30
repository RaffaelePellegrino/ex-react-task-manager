import { useState, useRef, useMemo } from "react";

const symbol = "!@#$%^&*()_+[]{}|;':\",.<>?`~";


export default function AddTask() {

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef= useRef();
  const taskNameRegex = useMemo(() => {
    if(!taskTitle){
      return null;
    }else if([...taskTitle].some((char) => symbol.includes(char))){
      return "il titolo del task non può contenere caratteri speciali";
    }
  }, [taskTitle]);


  const handleSubmit = (e) => {
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
              onChange={(e) => setTaskTitle(e.target.value)}>
              
              </input>
            {taskNameRegex && <p style={{color: 'red'}}>{taskNameRegex}</p>}
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
          <button
            type="submit">
            Aggiungi Task
            </button>
        </form> 
    </div>
  );
}
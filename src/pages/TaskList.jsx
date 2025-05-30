import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log(tasks);

  return (
    <div>
      <h1>Task list</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Descrizione</th>
            <th>Data di creazione</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{new Date(task.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

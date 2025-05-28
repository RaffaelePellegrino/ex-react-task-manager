import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <routes>
        <Route path="/" element={<TaskList></TaskList>}>
        </Route>
        <Route path="/add" element= {<AddTask/>}></Route>
      </routes>
    </BrowserRouter>
  );
}

export default App;

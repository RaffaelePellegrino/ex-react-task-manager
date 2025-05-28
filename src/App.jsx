import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink as Navlink } from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import { GlobalProvider } from "./context/GlobalContext";


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav>
          <Navlink to="/">Lista Task </Navlink>
          <Navlink to="/add">Aggiungi Task</Navlink>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList/>}>
          </Route>  
          <Route path="/add" element={<AddTask/>}>
          </Route>      
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

import './App.css';
import Dashboard from './Components/Dashboard';
import { Routes, Route } from "react-router-dom";
import Team from './Components/Team';
import Movies from './Components/Movies';
import Event from './Components/Event';
import Task from './Components/Task';
import Documentaion from './Components/Documentaion';

function App() {
  return (
    <>
   

    <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="team" element={ <Team/> } />
        <Route path="movies" element={ <Movies/> } />
        <Route path="event" element={ <Event/> } />
        <Route path="task" element={ <Task/> } />
        <Route path="documentaion" element={ <Documentaion/> } />
      </Routes>
    </>
  );
}

export default App;

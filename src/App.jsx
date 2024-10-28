import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Project" element={<Project />}/>
    </Routes>
  );
  
}

export default App

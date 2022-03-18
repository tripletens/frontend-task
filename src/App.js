import logo from './logo.svg';
import './App.css';

import * as ReactDOM from "react-dom";
import Landing from './Pages/Landing/Landing';
import { Routes, Route } from "react-router-dom";
import Completed from './Pages/Completed/Completed';
import Active from './Pages/Active/Active';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="completed" element={<Completed/>} />
        <Route path="active" element={<Active/>} />
      </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import * as ReactDOM from "react-dom";
import Landing from './Pages/Landing/Landing';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;

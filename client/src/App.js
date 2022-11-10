import logo from "./logo.svg";
import "./App.css";
import react, { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch('/me')
  //     .then((resp) => resp.json())
  //     .then((data) => setUser(data))
  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/signup" element={<Signup setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;

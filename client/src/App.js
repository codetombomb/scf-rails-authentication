import logo from "./logo.svg";
import "./App.css";
import react, { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Auth/Login";

function App() {
  const [user, setUser] = useState({
    username: ""
  })
  const [errors, setErrors] = useState([])

  // useEffect(() => {
  //   fetch('/me')
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data))
  // }, [])

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/signup" element={<Signup setUser={setUser}/>} />
        <Route path="/login" element={<Login errors={errors} setErrors={setErrors} setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;

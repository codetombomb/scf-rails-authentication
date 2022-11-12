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
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/items')
      .then((resp) => resp.json())
      .then((data) => setItems(data))
  }, [])

  useEffect(() => {
    fetch('/me')
      .then(resp => {
        if(resp.ok){
          resp.json().then(user => {
            setLoggedIn(true)
            setUser(user)
          })
        } else {
          resp.json().then(err => setErrors(err))
        }
      })
  }, [])

  const handleUserUpdate = (user) => {
    setUser(user)
    setLoggedIn((prevValue) => !prevValue)
  }

  return (
    <div className="App">
      <NavBar setUser={setUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<Home user={user} items={items} loggedIn={loggedIn}/>} />
        <Route path="/signup" element={<Signup setUser={handleUserUpdate}/>} />
        <Route path="/login" element={<Login errors={errors} setErrors={setErrors} setUser={handleUserUpdate} setLoggedIn={setLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header"
import HandleUsers from "./HandleUsers"

function App() {
  const [user,setUser] = useState(null)

  useEffect(() => {
    fetch ("http://localhost:3000/me").then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (user){
    return (<div>
      <Header user={user}/>
      </div>)
  }
  else {
    return (<div>
      <Header user={user}/>
      <HandleUsers setUser={setUser}/>
    </div>)
  }
}

export default App;

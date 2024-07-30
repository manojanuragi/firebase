

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {
  const [userName, setUserName]= useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user.displayName);
        setUserName(user.displayName);
      }else{
        setUserName("");
      }
      
    });
  },[]);
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Home name={userName}/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

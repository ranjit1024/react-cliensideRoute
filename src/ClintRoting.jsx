import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Dashboard } from "./component/Dashboard";
import { Landing } from "./component/Landing";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar(){
  const navigate = useNavigate();
  return <div
        style={{
          width: "99vw",
          backgroundColor: "gray",
          height: "40px",
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <ul
          style={{
            display: "flex",
            height: "100%",
            listStyle: "none",
            marginLeft: "10px",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            fontSize: "20px",
            color:"white",
            marginBottom:'10px'
          }}
        >
          <li><button onClick={
            ()=>{
              navigate("/dashboard")
            }
          }>Dashboard</button></li>

          <li><button onClick={
            (e)=>{
              navigate("/")
            }
          }>Landing page</button></li>
        </ul>
      </div>

}

export default App;

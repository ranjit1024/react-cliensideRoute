import { lazy, Suspense, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard =  lazy( () => import("./component/Dashboard"));
const  Landing  =  lazy( () => import("./component/Landing"));


function App(){
    return(
        <>
        <BrowserRouter>
        <AppBar></AppBar>
            <Routes>
                <Route path="/dashboard"  element={<Suspense fallback={"loading..."}> <Dashboard/></Suspense>}></Route>
                <Route path="/" element={<Suspense fallback={"loading..."}> <Landing/></Suspense> }></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
function AppBar(){
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

          <li><button   onClick={
            (e)=>{
              navigate("/")
            }
          }>Landing page</button></li>
        </ul>
      </div>

}
export default App;
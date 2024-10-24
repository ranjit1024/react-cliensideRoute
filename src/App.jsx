import { lazy, Suspense, useMemo, useState , memo} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = lazy( () => import("./component/Dashboard"));
const Landing = lazy(() => import("./component/Landing"));

function App(){
    return (
        <>
            <BrowserRouter>
                <AppBar></AppBar>
                <Routes>
                    <Route path="/dashboard" element={<Suspense fallback={"..loading"}><Dashboard/></Suspense>}></Route>
                    <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

const AppBar = memo(function AppBar(){
    const navigate = useNavigate("")
    return <div style={{
        backgroundColor:"gray",
        height:"40px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    }}>
        
    <button style={{
        backgroundColor:"white",
        border:"none",
        padding:"10px",
        borderRadius:"5px"
    }} onClick={
        (e)=>{
            navigate('/dashboard')
        }
    }>DashBoard</button>

    <button style={{
        backgroundColor:"white",
        border:"none",
        padding:"10px",
        borderRadius:"5px"
    }} onClick={
        (e)=>{
            navigate("/")
        }
    }>landing</button>
    
    
    </div>
})
export default App;
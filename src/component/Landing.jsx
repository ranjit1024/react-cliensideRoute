import React from "react";

export default function Landing(){
    return <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gridTemplateRows:"1fr ",
        height:"90vh"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100%"
             
        }}>
            <h1>Welcome to La La Land</h1>
            <h4>this is website for la la land user</h4>
        </div>
       
       <div style={{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"column",
        gap:"20px"
       }}>
        <input style={{
            width:"50%",
            height:"20px",
            borderRadius:"5px",
            border:"1px solid black",
            padding:"10px"
        }} type="text" name="" id="" placeholder="Enter your Name"/>
       
        <input style={{
            width:"50%",
            height:"20px",
            borderRadius:"5px",
            border:"1px solid black",
            padding:"10px"
        }} type="text" name="" id="" placeholder="Enter your password"/>
       
        <button style={{
            padding:"8px 25px 8px 25px",
            backgroundColor:"green",
            color:"white",
            fontSize:"15px",
            borderRadius:"5px",
            border:'1px solid black',
            fontSize:"16px"
        }}>Submit</button>
       </div>
    </div>
}
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
            minHeight:"400px",
            minWidth:"400px"
             
        }}>
            <p style={{
                fontSize:"50px",
                fontWeight:"400",
                marginBottom:"10px",
                textShadow: "1px 1px black"
            }}>Welcome to La La Land</p>

            <p style={{
                fontSize:'20px',
                fontWeight:"400"
            }}>this is website for la la land user</p>
        </div>
       
       <div style={{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"column",
        gap:"20px",
        minWidth:"500px"
       }}>
        <input style={{
            width:"70%",
            height:"20px",
            borderRadius:"5px",
            border:"1px solid black",
            padding:"10px",
            minWidth:"50%"
        }} type="text" name="" id="" placeholder="Enter your Name"/>
       
        <input style={{
            width:"70%",
            height:"20px",
            borderRadius:"5px",
            border:"1px solid black",
            padding:"10px",
            minWidth:"50%"
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
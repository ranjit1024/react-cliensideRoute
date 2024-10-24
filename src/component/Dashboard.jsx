import React from "react";

export default function Dashboard() {
  return (
    <div style={{
        display:"flex",
        height:"100vh",
        width:"100vw"
    }}>
    
    <nav className="sidebar" style={{
        width:"250px",
        backgroundColor:"gray",
        height:"100vh",
        marginTop:"10px"
    }} >
            <h2>Dashboard</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>

        <div class="main-content">
          
            <header>
                <h1>Welcome to Your Dashboard</h1>
            </header>

            
            <section class="content">
                <div class="card">
                    <h3>Statistics</h3>
                    <p>Views: 2,450</p>
                    <p>Users: 1,200</p>
                </div>
                <div class="card">
                    <h3>Revenue</h3>
                    <p>This Month: $5,000</p>
                    <p>Last Month: $4,500</p>
                </div>
                <div class="card">
                    <h3>Tasks</h3>
                    <p>Completed: 10</p>
                    <p>Pending: 3</p>
                </div>
                <div class="card">
                    <h3>Notifications</h3>
                    <p>New Messages: 5</p>
                    <p>Alerts: 2</p>
                </div>
            </section>
        </div>
    

    </div>
)}
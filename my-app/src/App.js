import React from 'react';
// import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
     <header className="header">
       <img src = "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt = "logo"/> 
     </header>
     <nav className="nav">
       <div><a>Profile</a></div>
       <div><a>Messages</a></div>
       <div><a>News</a></div>
       <div><a>Music</a></div>
       <div><a>setting</a></div>
     </nav>
     <div className="content">
       Main Content
     </div>
    </div>
  );
};

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/news';
import Music from './components/music/music';
import Setting from './components/setting/setting';


const App = () => (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* <Profile/> */}
            <div className="app-wrapper-content">
                <Route path = "/profile" component={Profile} />
                <Route path = "/dialogs" component={Dialogs} />
                <Route path = "/news" component={News} />
                <Route path = "/music" component={Music} />
                <Route path = "/setting" component={Setting} />
            </div>

        </div>
    </BrowserRouter>
);

export default App;

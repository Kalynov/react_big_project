import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/news';
import { UsersContainer }  from './components/users/usersContainer';
import Music from './components/music/music';
import Setting from './components/setting/setting';
import DialogsContainer from './components/dialogs/dialogsContainer';


const App = (props) => (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* <Profile/> */}
            <div className="app-wrapper-content">
                <Route
                    path = "/profile"
                    render = {
                        () => <Profile
                            store = {props.store}
                        />
                    }
                />
                <Route path = "/dialogs" render={() => <DialogsContainer   store = {props.store}/>} />
                <Route path = "/news" render={() => <News/>} />
                <Route path = "/music" render={() => <Music/>} />
                <Route path = "/setting" render={() => <Setting/>} />
                <Route path = "/users" render={() => <UsersContainer   store = {props.store}/>} />

            </div>

        </div>
);

export default App;

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


const App = (props) => (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* <Profile/> */}
            <div className="app-wrapper-content">
                <Route
                    path = "/profile"
                    render = {
                        () => <Profile
                            profilePage = {props.state.profilePage}
                            dispatch = {props.dispatch}
                            /* addPost = {props.addPost}
                            apdatePostText = {props.apdatePostText} */
                        />
                    }
                />
                <Route path = "/dialogs" render={() => <Dialogs  dialogsPage = {props.state.dialogPage} dispatch = {props.dispatch}/>} />
                <Route path = "/news" render={() => <News/>} />
                <Route path = "/music" render={() => <Music/>} />
                <Route path = "/setting" render={() => <Setting/>} />
            </div>

        </div>
    </BrowserRouter>
);

export default App;

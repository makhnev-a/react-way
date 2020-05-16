import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    let profilePage = () =>
        <ProfileContainer/>;

    let dialogsPage = () =>
        <DialogsContainer/>;

    let usersPage = () =>
        <UsersContainer/>;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path='/dialogs'
                    render={dialogsPage}
                />
                <Route
                    path='/profile'
                    render={profilePage}
                />
                <Route
                    path={'/users'}
                    render={usersPage}
                />
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
};

export default App;
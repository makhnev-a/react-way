import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};

const Technologies = () => {
    return (
        <div className="App">
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href='#test'>Home</a>
            <a href='#test1'>News feed</a>
            <a href='#test2'>Messges</a>
        </div>
    );
};

export default App;

import preloader from '../../assets/img/loader.svg';
import React from "react";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;
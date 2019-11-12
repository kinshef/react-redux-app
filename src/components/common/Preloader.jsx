import React from 'react';
import loader from "../../assets/img/giphy.gif";

let Preloader = (props) => {
    return  props.class ? <img className={props.class} src={loader}/> : <img src={loader}/>
}

export default Preloader;
import React from 'react';
import loader from "../../assets/img/giphy.gif";

let Preloader = (props) => props.class ? <img alt=''  className={props.class} src={loader}/> : <img alt=''  src={loader}/>

export default Preloader;
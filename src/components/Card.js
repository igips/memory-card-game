import React, {useState} from "react";
import "../style/Card.css";


function Card(props) {

    return(
        <div className="pictureDiv"><img src={require(`../img/${props.src}.jpeg`)} alt="" /><div className="picName">{props.name}</div></div>
    );
}

export default Card;
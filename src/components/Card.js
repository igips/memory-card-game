import React, {useState, useEffect, useRef} from "react";
import "../style/Card.css";


function Card(props) {
    const ref = useRef();


    useEffect(() => {
        const a = ref.current;

        a.addEventListener("click", () => props.click(props.id));
        

        return () => {
            a.removeEventListener("click", props.click);
        };

    },[props]);

    return(
        <div ref={ref} className="pictureDiv"><img src={require(`../img/${props.src}.jpeg`)} alt="" /><div className="picName">{props.name}</div></div>
    );
}

export default Card;
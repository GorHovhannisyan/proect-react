import React from "react";
import loader from "../../../assets/images/loader.gif"

let Preloader = (props) => {
    return <div /* style={{backgroundColor: "white"}} */ >
        <img src={loader} />
    </div>
}

export default Preloader;
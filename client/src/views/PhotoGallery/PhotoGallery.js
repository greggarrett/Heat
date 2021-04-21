import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";


function BasicRows () {
    return (
        <Gallery photos = {photos} />
    );
}

    
render(<BasicRows />, document.getElementById("root"));




export default BasicRows;


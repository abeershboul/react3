import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./Data.json";


let beastData = data.map(val => 


    <HornedBeast 
        key = {val._id}
        title = {val.title}
        img = {val.image_url}
        description = {val.description}
    /> 
);

class Main extends React.Component {
    render(){
        return(
            beastData
            
        )
    }
}

export default Main;
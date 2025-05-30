import { useSyncExternalStore } from "react";
import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent constructor")
    }

    componentDidMount(){
        //console.log("Parent cdm")
    }
    render(){
       // console.log("Parent render")
        return (
          <div>
            <h2>About FoodVerse!!!!!!!!</h2>
            <h3>Find the bestt food here</h3>
            <UserClass name={"Nandini"} location={"Noida"} />
          </div>
        );
    }
}

// const About = () =>{
//     return (
//         <div>
//             <h2>About FoodVerse!!!!!!!!</h2>
//             <h3>Find the bestt food here</h3>
//             <UserClass name={"Nandini"} location={"Noida"} />
//         </div>
//     )
// }

export default About;
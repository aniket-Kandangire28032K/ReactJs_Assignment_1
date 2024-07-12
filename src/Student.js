import { Component } from "react";
import { useState } from "react";

function Student(props) {
    const [Address,setCity]=useState(props.Address);

    const changeLocation=()=>{
        setCity("Sambhaji Nagar");
    }
    return ( 
        <>
        <hr/>
        <p>Hi I am {props.name} and I am From {Address} <button onClick={changeLocation}>Short</button> </p>
        <p>I Scored {props.Score}% in Exam </p>
        </>
     );
}

class Cls  extends Component {
    state = {   
        name:"Sanket",
        Address:"Pune",
        Score:80
      } 
    render() { 
        return (
            <>
            <p>Hi I am {this.state.name} and I am From {this.state.Address} </p>
        <p>I Scored {this.state.Score}% in Exam </p>
        </>
        );
    }
}
 
export {Cls} ;

export default Student;
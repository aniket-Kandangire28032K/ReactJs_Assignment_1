import { Component } from "react";

class FirstC extends Component {
    
    render() { 
        return (
            <p>1st Class Component</p>
        );
    }
}
class SecondC extends Component {
    
    render() { 
        return (
            <p>2nd Class Component</p>
        );
    }
}
class ThirdC extends Component {
    
    render() { 
        return (
            <p>3rd Class Component</p>
        );
    }
}
class FourthC extends Component {
    
    render() { 
        return (
            <p>4th Class Component</p>
        );
    }
}

 
export default FirstC;
export {SecondC, ThirdC, FourthC};

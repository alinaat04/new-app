import React from "react";
import SignInForm from "./UserList/Signform";
// import Greeting from "./UserList/Signform";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newvalue: ''
        }
    }
    fn = (data) =>{
        this.setState({
            newvalue: data
        })
    }
    render(){
        return (
            <React.Fragment>
                <SignInForm callback ={this.fn}/>
                <div>{this.state.newvalue}</div>
            </React.Fragment>
        )
}
}


export default App;
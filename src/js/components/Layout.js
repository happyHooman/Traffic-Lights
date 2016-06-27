import React from "react";
import Button from "react-button";

//local components
import Semaphore from "./Semaphore";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {n1Toggle: false};
    }
    
    handleChange(){
        this.setState({n1Toggle: !this.state.n1Toggle});
    }

    render() {
        var buttonText = this.state.n1Toggle ? "Stop" : "Start";
        return (
            <div>
                <Semaphore
                    ref="n1"
                    toggle={this.state.n1Toggle}
                />
                <Button pressed={this.state.n1Toggle} onClick={this.handleChange.bind(this)} >{buttonText}</Button>
            </div>
        );
    }
}

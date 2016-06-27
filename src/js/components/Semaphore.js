import React from "react";
import Led from "./Led";


export default class Semaphore extends React.Component {
    startYellow() {
        this.refs.y.countdown(3);
    }
    startGreen() {
        this.refs.g.countdown(5);
    }
    startRed() {
        this.refs.r.countdown(9);
    }
    render() {
        return (
            <div class="semaphore" >
                <Led
                    color="red"
                    ref="r" //ref is used for referring to specific elements when calling their functions
                    whenReady={this.startYellow.bind(this)}
                    toggle={this.props.toggle}
                />
                <Led
                    color="yellow"
                    ref="y"
                    whenReady={this.startGreen.bind(this)}
                    toggle={this.props.toggle}
                />
                <Led
                    color="green"
                    ref="g"
                    whenReady={this.startRed.bind(this)}
                    autoStart={true}
                    toggle={this.props.toggle}
                />
            </div>
        );
    }
    
    componentDidMount(){
        if(this.props.toggle == true){
            this.startRed();
        }
    }
    
    componentDidUpdate(){
        if(this.props.toggle == true){
            this.startRed();
        }else{
            this.render();
        }
    }
}

//TODO nameplates for each semaphore and a dashboard for switching each of them
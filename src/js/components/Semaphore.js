import React from "react";
import Led from "./Led";


export default class Semaphore extends React.Component {
    constructor(){
        super();
        this.state = {turnedOn: false}
    }
    toggleSwitch(){
        this.setState({turnedOn: !this.state.turnedOn});
        this.refs.y.countdown(2);
    }
    startYellow() {
        if(this.state.turnedOn){
            this.refs.y.countdown(3);
        }
    }
    startGreen() {
        if(this.state.turnedOn){
            this.refs.g.countdown(5);
        }
    }
    startRed() {
        if(this.state.turnedOn){
            this.refs.r.countdown(9);
        }
    }
    render() {
        var style = {marginLeft: "42px", backgroundColor: "cyan", color: "blue"};
        var btnText = this.state.turnedOn ? "Stop" : "Start";
        return (
            <div class="semaphore" >
                <Led
                    color="red"
                    ref="r" //ref is used for referring to specific elements when calling their functions
                    whenReady={this.startYellow.bind(this)}
                />
                <Led
                    color="yellow"
                    ref="y"
                    whenReady={this.startGreen.bind(this)}
                />
                <Led
                    color="green"
                    ref="g"
                    whenReady={this.startRed.bind(this)}
                />
                <button style={style} onClick={this.toggleSwitch.bind(this)} >{btnText}</button>
            </div>
        );
    }
}

//TODO nameplates for each semaphore and a dashboard for switching each of them
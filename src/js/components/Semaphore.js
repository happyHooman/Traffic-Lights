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
            <div class="semaphore" onClick={this.startRed.bind(this)}>
                <Led
                    color="red"
                    ref="r"
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
            </div>
        );
    }
}

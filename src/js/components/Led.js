import React from "react";

export default class Led extends React.Component {
    constructor() {
        super();
        this.state = {
            turnedOn: false,
            counter: 0
        };
    }

    countdown(counter) {
        this.setState({turnedOn: true, counter: counter});
        var me = this;
        var color = this.props.color;
        var timer = setInterval(function () {
            var oldCounter = me.state.counter;
            if (oldCounter > 1 && me.props.toggle == true) {
                me.setState({counter: oldCounter - 1});
                if(color == "red" && me.state.counter==3){
                    me.props.whenReady();
                }
            }
            else {
                clearInterval(timer);
                me.state.counter=0;
                me.setState({turnedOn: false});
                if (me.props.whenReady && color != "red") {
                    me.props.whenReady();
                }
            }
        }, 500);
    }

    render() {
        var lit = 'color ' + this.props.color + (this.state.turnedOn ? ' on' : ''),
            counter = this.state.counter;
        counter = counter ? (counter < 10 ? '0' + counter : counter) : '';
        if(this.props.color == "yellow") counter = '';
        return (
            <div class={lit}>{counter}</div>
        );
    }
}

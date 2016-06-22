import React from "react";

//local components
import Semaphore from "./Semaphore";

export default class Layout extends React.Component {

    render() {
        const action = 'Start';
        return (
            <div>
                <label>Click on Semaphore to start.</label>
                <Semaphore />
                <div>
                    <button>{action}</button>
                </div>
            </div>
        );
    }
}

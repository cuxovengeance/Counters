import React, {useState} from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

import '../CSS/counter.css'

const Counter = ({counter,updateShowDelete,captIdToSave,updateShowShare}) => {

    /*counterDiv container*/
    return (
            <div className="ThirdDiv">
                <p
                    id="selection"
                    className="rowFirst"
                    onClick={() => {
                        updateShowDelete(true);
                        updateShowShare(true);
                        captIdToSave(counter);
                    }}
                >
                    <div className="rowTitle rowTitleText">{counter.title}</div>

                    <div
                        className="rowCounters"
                    >
                        <Decrement
                            counter={counter}
                        />
                        &emsp;{counter.count}&emsp;

                        <Increment
                            counter={counter}
                        />
                    </div>
                </p>
            </div>
    );
}
export default Counter;

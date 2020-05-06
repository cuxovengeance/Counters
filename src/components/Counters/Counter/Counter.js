import React from "react";
import Increment from "../../Functions/Increment/Increment";
import Decrement from "../../Functions/Decrement/Decrement";

import './counter.css'
import './selectItem.css'

const Counter = ({counter,counters,saveCounters,updateShowDelete,updateShowShare,captIdToSave,selectCounter}) => {

    const counterIsSelected = selectCounter.id === counter.id;

    return (
            <div
                className="ThirdDiv"
               /* style={{backgroundColor:
                        counterIsSelected
                            ? "#FF9500"
                            : "white"}}*/
            >
                <p
                    id="selection"
                    className="rowFirst"
                    onClick={() => {
                        updateShowDelete(true);
                        updateShowShare(true);
                        captIdToSave(counter);
                    }}
                >
                    <div className="rowTitle rowTitleText"> {counter.title} </div>

                    <div className="rowCounters">
                        <Decrement
                            counter={counter}
                            counters={counters}
                            saveCounters={saveCounters}
                        />

                        &emsp;{counter.count}&emsp;

                        <Increment
                            counter={counter}
                            counters={counters}
                            saveCounters={saveCounters}
                        />
                    </div>
                </p>
            </div>
    );
}
export default Counter;

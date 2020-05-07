import React, {Fragment} from "react";
import Increment from "../../Functions/Increment/Increment";
import Decrement from "../../Functions/Decrement/Decrement";

import './counter.css'

export const Counter = ({counter,counters,saveCounters,updateShowDelete,updateShowShare,captIdToSave,idToSave}) => {

    const counterIsSelected = idToSave.id === counter.id;

    return (
            <Fragment>
                <p
                    id="selection"
                    className="rowFirst"
                    onClick={() => {
                        updateShowDelete(true);
                        updateShowShare(true);
                        captIdToSave(counter);
                    }}
                >
                    <div
                        className={
                            counterIsSelected
                                ? "selectItem"
                                : null}> </div>
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
            </Fragment>
    );
}
export default Counter;

/* style={{backgroundColor:
         counterIsSelected
             ? "#FF9500"
             : "white"}}*/
/* className={counterIsSelected ? "ThirdDiv" : "selectItem"}*/

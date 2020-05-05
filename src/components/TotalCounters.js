import React from "react";
import '../CSS/totalCounters.css';

const TotalCounters = ({counters}) => {
    let countTotal = counters.map(data => data.count);
    let total = 0;

    for ( let i=0 ; i < countTotal.length; i++){
        total += countTotal[i];
    }

    let totalItems = counters.length;

    return(
        <div className="layoutDiv">
            <p className="totalItemsP"> {totalItems} items </p> &emsp;
            <p
                className="totalCountersP"
            >{total} times</p>
        </div>

    );
};

export default TotalCounters;

import React from "react";

const TotalCounters = ({counters}) => {
    let countTotal = counters.map(data => data.count);
    let total = 0;

    for ( let i=0 ; i < countTotal.length; i++){
        total += countTotal[i];
    }


    return(
        <p>{total}</p>
    );
};

export default TotalCounters;

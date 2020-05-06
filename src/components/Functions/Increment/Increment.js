import React, {Fragment} from "react";
import './incrementDecrement.css';

const Increment = ({counter,counters,saveCounters}) => {

    const incBtn = (e) => {
        e.preventDefault();

        const id = counter.id;
        const body = {
            'id': id
        };

        fetch('/api/v1/counter/inc', {
            method: 'post',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                counters = counters.map(data => data.id === res.id ? res : data);
                saveCounters(counters);
            })
    };

    return(
        <Fragment>
            <i onClick={incBtn} className="fas fa-plus configIcons"> </i>
        </Fragment>
    );
};

export default Increment;

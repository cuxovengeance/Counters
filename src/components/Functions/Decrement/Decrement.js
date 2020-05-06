import React, {Fragment} from "react";
import '../Increment/incrementDecrement.css';

const Decrement = ({counter,counters,saveCounters}) => {

    const decBtn= (e) => {
        e.preventDefault();

        const id = counter.id;
        const body = {
            'id': id
        };

        fetch('/api/v1/counter/dec', {
            method: 'post',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                counters = counters.map(data => data.id === res.id ? res : data);
                saveCounters(counters);
            })
    }
    return(
        <Fragment>
            <i onClick={decBtn} className="fas fa-minus configIcons"> </i>
        </Fragment>
    );
};

export default Decrement;

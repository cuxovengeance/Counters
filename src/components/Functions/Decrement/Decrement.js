import React, {Fragment} from "react";
import api from "../../../api";
import '../Increment/incrementDecrement.css';

const Decrement = ({counter,counters,saveCounters}) => {

    const decBtn = (e) => {
        e.preventDefault();

        const id = counter.id;
        const body = {
            'id': id
        };

        api.post('/api/v1/counter/dec', body)
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

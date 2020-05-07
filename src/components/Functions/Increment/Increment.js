import React, {Fragment} from "react";
import api from "../../../api";
import './incrementDecrement.css';

const Increment = ({counter,counters,saveCounters}) => {

    const incBtn = (e) => {
        e.preventDefault();

        const id = counter.id;
        const body = {
            'id': id
        };

        api.post('/api/v1/counter/inc', body)
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

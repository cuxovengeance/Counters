import React, {Fragment, useEffect} from "react";

const Increment = ({counter}) => {


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
            .then(res => console.log(res))
    }


    return(
        <Fragment>
            <button onClick={incBtn}> + </button>
        </Fragment>
    );
};

export default Increment;

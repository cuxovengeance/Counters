import React, {Fragment} from "react";

const Decrement = ({counter}) => {

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
            .then(res => console.log(res))
    }
    return(
        <Fragment>
            <button onClick={decBtn}> - </button>
        </Fragment>
    );
};

export default Decrement;

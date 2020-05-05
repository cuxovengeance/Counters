import React, {Fragment, useEffect} from "react";

import '../CSS/incrementDecrement.css';

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
            <i onClick={incBtn} className="fas fa-plus configIcons"> </i>
            {/*<button onClick={incBtn}><i className="fas fa-plus configIcons"> </i> </button>*/}
        </Fragment>
    );
};

export default Increment;

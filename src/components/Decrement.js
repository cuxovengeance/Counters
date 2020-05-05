import React, {Fragment} from "react";
import '../CSS/incrementDecrement.css';

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
            <i onClick={decBtn} className="fas fa-minus configIcons"> </i>
            {/*<button onClick={decBtn}><i className="fas fa-minus configIcons"> </i> </button>*/}
        </Fragment>
    );
};

export default Decrement;

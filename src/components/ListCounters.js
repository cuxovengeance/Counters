import React, {Fragment, useState, useEffect} from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Delete from "./Delete";

import '../CSS/listCounters.css'

const ListCounters = ({updateShowDelete,captIdToSave}) => {

    /*State de los Contadores*/
    const [counters, updateCounters] = useState([]);

    /*console.log(counters.map(counter => counter.count));*/
 /*   let [setCount, updateCounts] = useState('');
    const i = counters.map(counter => counter.count);*/

    const callGet = async () => {
        await fetch('/api/v1/counter', { method: 'get' })
            .then(res => res.json())
            .then(res => updateCounters(res))
    }

    /*Arreglar que cambie por cada cambio, no que este corriendo siempre*/
    useEffect(() => {callGet()}, [counters])

    return(
        <Fragment>
                <div className="center">
                    {/*Realizo un map de Counters[] osea mapeo todo el Array
                y le paso su id unico, el titulo del counter y finalmente el count*/}
                    {counters && counters.map(counter => (
                        <p
                            key={counter.id}
                            onClick={() => {
                                updateShowDelete(true)
                                captIdToSave(counter)
                            }}

                        >
                            {counter.title}

                            &emsp; &emsp; &emsp;

                            <Decrement
                                counter={counter}
                            />
                            {counter.count}
                            <Increment
                                counter={counter}
                            />

                        </p>
                    ))}

                </div>

        </Fragment>
    );
};

export default ListCounters;

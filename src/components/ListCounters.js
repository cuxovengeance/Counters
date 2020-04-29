import React, {Fragment, useState, useEffect} from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

const ListCounters = () => {

    /*State de los Contadores*/
    const[counters, updateCounters] = useState([]);


    useEffect(() => {
        /*utilizo el getCounters, le paso la data a mi State y como [dependencia]
        * le paso mi [counters] para que lo actualice cada vez que recibe un
        * registro nuevo*/
            /*getCounters().then(data => updateCounters(data), console.error);*/

        fetch('/api/v1/counter', { method: 'get' })
            .then(res => res.json())
            .then(res => updateCounters(res))
        }, [counters]);


    return(
        <Fragment>
            {/*{JSON.stringify(counters)}*/}
            <div>
                {/*Realizo un map de Counters[] osea mapeo todo el Array
                y le paso su id unico, el titulo del counter y finalmente el count*/}
                {counters && counters.map(counter => (
                    <p

                        key={counter.id}
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

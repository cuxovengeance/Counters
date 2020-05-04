import React, {Fragment, useEffect, useState} from "react";
import Counter from "./Counter";

import '../CSS/listCounters.css'
import TotalCounters from "./TotalCounters";

const ListCounters = ({
                          counters,
                          counter,
                          createCounter,
                          saveCounters,
                          savecreateCounter,
                          updateShowDelete,
                          captIdToSave,
                          updateShowShare,
                          setSearch,
                          search,
                          setLoadingSearch}) => {

    /*Obtengo los registros*/
    const callGet = async () => {
        await fetch('/api/v1/counter', { method: 'get' })
            .then(res => res.json())
            .then(res => {
                saveCounters(res);
                setFilteredCounters(res);
            })
    }

    /*Carga los registros cuando se inicia la app*/
    useEffect(()=>{callGet()},[])


    /*useState para modificar la lista al buscar un contador*/
    const [filteredCounters , setFilteredCounters] = useState([]);

    useEffect(() => {
        if(createCounter){
            saveCounters([
                ...counters,
                counter
            ]);
        }
        savecreateCounter(false);
        callGet();
        setLoadingSearch(false);

        if(search !== '')
            setFilteredCounters(
                counters.filter( counter => {
                    return counter.title.toLowerCase().includes(search.toLowerCase());
                })
            )
    },[counters/*, search, createCounter,saveCounters,counter, savecreateCounter, setLoadingSearch*/])


    /*Borrar texto al dar click en cancelar busqueda*/
    const erase = () => {
        setSearch('');
        document.getElementById('inputSearch').value = '';
    }

    return(
        <Fragment>

            <div className="center">
                <input
                    id="inputSearch"
                    type="text"
                    placeholder="Search Counters"
                    onChange={e => {
                        setSearch(e.target.value);
                    }}
                />
                <button onClick={() => {erase()}}> Cancel </button>
            </div>

            <div>
                <TotalCounters
                    counters={counters}
                />
            </div>

                <div className="center">
                    {filteredCounters.map(counter => (
                        <Counter
                            key={counter.id}
                            counter={counter}

                            updateShowDelete={updateShowDelete}
                            updateShowShare={updateShowShare}

                            captIdToSave={captIdToSave}
                        />
                    ))}
                </div>
        </Fragment>
    );
};

export default ListCounters;

/*============= NOTAS & AYUDAS================*/
/*Counters momentaneo¨** ver la posibilidad de que se ejecute solo cuando
* el contador de alguno de los registros cambie*/

/*Realizo un map de Counters[] osea mapeo todo el Array
  y le paso su id unico y el counter completo al elemento Counter.js
  para que sea el que contenga la info*/
/*{filteredCounters.map(counter => (*/

/*    contadores de los registros
    const i = counters.map(counter => counter.count);
    let count = counters.map(data => data.count);*/


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
    /*useState para modificar la lista al buscar un contador*/
    const [filteredCounters , setFilteredCounters] = useState([]);

    /*Obtengo los registros*/
    const getCounters = () => {
         fetch('/api/v1/counter', { method: 'get' })
            .then(res => res.json())
            .then(res => {
                saveCounters(res);
                setFilteredCounters(res);
            })
    };

/*    const AppP = () => {
        React.useEffect(() => {
            getCounters().then(counters, console.error);
        }, []);*/

        /*Carga los registros cuando se inicia la app*/
  /*      useEffect(() => {
            getCounters();
        }, [])
    */
    /*Backup*/
    useEffect(() => {
        if (createCounter) {
            saveCounters([
                ...counters,
                counter
            ]);
        }

        savecreateCounter(false);
        getCounters();
        setLoadingSearch(false);

        if (search !== '')
            setFilteredCounters(
                counters.filter(counter => {
                    return counter.title.toLowerCase().includes(search.toLowerCase());
                })
            )
    }, [counters, search, createCounter,saveCounters,counter, savecreateCounter, setLoadingSearch]);


        /*Borrar texto al dar click en cancelar busqueda*/
    const erase = () => {
        setSearch('');
        document.getElementById('inputSearch').value = '';
    }


        return (
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
                    <button onClick={() => {
                        erase()
                    }}> Cancel
                    </button>
                </div>

                <div>
                    <TotalCounters
                        counters={counters}
                    />
                </div>

                <div className="center" >
                    {filteredCounters.map((counter) => (
                        <div
                            /*id={JSON.stringify(counter.id)}*/
                            class='prueba'
                            key = {counter.id}
                        >
                            <Counter
                                key={counter.id}
                                counter={counter}
                                counters={counters}

                                updateShowDelete={updateShowDelete}
                                updateShowShare={updateShowShare}

                                captIdToSave={captIdToSave}
                            />
                        </div>
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


/*    const colorSelection = () => {
id={JSON.stringify(counter.id)} ** en el id del div
        let selection = document.getElementById(`${JSON.stringify(counter.id)}`);
        setid(JSON.stringify(counter.id));
        if(id !== JSON.stringify(counter.id)){
            selection.style.backgroundColor ='#FF9500';
        }

        let selection = document.getElementById(`${JSON.stringify(counter.id)}`);
        setid(JSON.stringify(counter.id));
        const clear = () => {
            for(let i=0; i < counters.lenght; i++){
                let item = selection[i];
                item.style.backgroundcolor = '#E5E5E5';
            }
        }
        if(id === JSON.stringify(counter.id)){
            clear();
            selection.style.backgroundColor ='#FF9500';
        }
    }*/


/*    let divCounters = document.getElementById("divCounters");
    const selected = (counterColor)=> {
        clear();
        counterColor.style.backgroundColor = '#FF9500';
    }
    const clear = () => {
        for (let i=0; i< divCounters.length; i++){
            let item = divCounters[i];
            item.style.backgroundColor = 'white';
        }
    }*/

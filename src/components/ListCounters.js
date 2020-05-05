import React, {Fragment, useEffect, useState} from "react";
import Counter from "./Counter";

import '../CSS/listCounters.css';
import '../CSS/search.css';
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
    const [showList, setShowList] = useState(true);

    /*Obtengo los registros*/
    const getCounters = () => {
         fetch('/api/v1/counter', { method: 'get' })
            .then(res => res.json())
            .then(res => {
                saveCounters(res);
                setFilteredCounters(res);

            })
    };


    /*Backup*/
    useEffect(() => {
        if( counters.length <= 0){
            setShowList(false);
        } else {
            setShowList(true);
        }

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

                {/*=========SEARCH BAR ===========*/}
                <div className="searchDiv">
                    <input
                        className="searchInput"
                        id="inputSearch"
                        type="text"
                        placeholder="Search Counters"
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        className="cancelButton"
                        onClick={() => {
                        erase()
                    }}>
                        <label
                            className="labelCancel"
                        >Cancel</label>
                    </button>
                </div>

                {/*=========TOTAL COUNTERS=========*/}
                <div className=".container totalTimes divTotalConter">
                    <TotalCounters
                        counters={counters}
                    />
                </div>

                <div className="divContent">
                    {/*==========LIST COUNTERS==========*/}
                    {showList ?
                         <div className="FirstContainer">
                            {filteredCounters.map((counter) => (
                                <div
                                    /*id={JSON.stringify(counter.id)}*/
                                    key={counter.id}
                                    className="SecondContainer"
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
                    : <div className="boxNoCounters">
                            <h2 className="h1NoContent">No counters yet</h2>
                            <br/>
                            <p className="pNoContent">“When I started counting my blessings, my whole life turned around.”</p>
                            <p className="pNoContent">—Willie Nelson</p>
                    </div>}

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

/*    const AppP = () => {
        React.useEffect(() => {
            getCounters().then(counters, console.error);
        }, []);*/

/*Carga los registros cuando se inicia la app*/
/*      useEffect(() => {
          getCounters();
      }, [])
  */

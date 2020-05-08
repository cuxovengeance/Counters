import React, {Fragment, useEffect, useState} from "react";
import Counter from "../Counter/Counter";
import TotalCounters from "../TotalCounters/TotalCounters";
import api from "../../../api";
import './listCounters.css';
import './Search/search.css';
import '../../../index.css';

const ListCounters = ({
                          counters,
                          saveCounters,
                          updateShowDelete,
                          captIdToSave,
                          idToSave,
                          updateShowShare,
                          setSearch,
                          search}) => {

    /*useState para modificar la lista al buscar un contador*/
    const [filteredCounters , setFilteredCounters] = useState([]);
    const [showList, setShowList] = useState(true);


    /*UseEffect para mostrar la lista al iniciar*/
    useEffect(() => {
            api.get('/api/v1/counter').then(res => {
                saveCounters(res)
                res.length && setShowList(true);
                res.length && setFilteredCounters(res);
        })
    },[]);


    /*UseEffect Para realizar la busqueda de un Contador*/
    useEffect(() => {
        if(search !== ''){
            setFilteredCounters(
                counters.filter(counter => {
                    return counter.title.toLowerCase().includes(search.toLowerCase());
                })
            )
        } else {
            setFilteredCounters(counters);
        }
    },[search]);

    /*UseEffect para crear y actualizar al borrar un registro*/
    useEffect(() => {
        if(!counters.length){
            setShowList(false);
        } else {
            setFilteredCounters(counters)
            setShowList(true);
        }

    },[counters]);

    /*Borrar texto al dar click en cancelar busqueda*/
    const erase = () => {
        setSearch('');
        document.getElementById('inputSearch').value = '';
    }

        return (
            <Fragment>

                {/*=========SEARCH BAR ===========*/}
                <div className="searchDiv fade-in">
                    <input
                        className="searchInput"
                        id="inputSearch"
                        type="text"
                        placeholder="Search Counters"
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
                <button
                    id="cancelButton"
                    className="cancelButton fade-in"
                    onClick={() => {
                        erase()
                    }}>
                    <label
                        className="labelCancel"
                    >Cancel</label>
                </button>

                {/*=========TOTAL COUNTERS=========*/}
                <div className=".container totalTimes divTotalConter fade-in">
                    <TotalCounters
                        counters={counters}
                    />
                </div>

                <div className="divContent">
                    {/*==========LIST COUNTERS==========*/}
                    {showList ?
                         <div className="FirstContainer fade-in">
                            {filteredCounters.map((counter) => (
                                <div
                                    key={counter.id}
                                    className="SecondContainer"
                                >
                                    <Counter
                                        key={counter.id}
                                        counter={counter}
                                        counters={counters}
                                        saveCounters={saveCounters}

                                        updateShowDelete={updateShowDelete}
                                        updateShowShare={updateShowShare}

                                        captIdToSave={captIdToSave}
                                        idToSave={idToSave}
                                    />
                                </div>
                            ))}
                        </div>
                    : <div className="boxNoCounters fade-in">
                            <h2 className="h1NoContent fade-in">No counters yet</h2>
                            <br/>
                            <p className="pNoContent fade-in">“When I started counting my blessings, my whole life turned around.”</p>
                            <p className="pNoContent fade-in">—Willie Nelson</p>
                    </div>}

                </div>
            </Fragment>
        );

    };

export default ListCounters;

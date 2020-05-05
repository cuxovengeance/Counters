import React,{Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Components*/
import Welcome from "./components/Welcome";
import CreateCounter from "./components/CreateCounter";
import ListCounters from "./components/ListCounters";
import Delete from "./components/Delete";
import Share from "./components/Share";
import Examples from "./components/Examples";

function App() {
    /*State de WelcomeScreen
    * Lo inicio el true, porque es lo primero que se muestra en pantalla
    * al iniciar la app*/
    const [showWelcome, updateShowWelcome] = useState(true);

    /*State de los Contadores*/
    const [counters, saveCounters] = useState([]);

    /*State para un solo contador*/
    const [counter, saveCounter] = useState('');

    /*State para saber si se creo un counter nuevo*/
    const [createCounter, savecreateCounter] = useState(false);

    /*State Mostrar Delete*/
    const [showDelete, updateShowDelete] = useState(false);

    /*State para captar el registro clickeado*/
    const [idToSave, captIdToSave] = useState('');

    /*State Mostrar Share*/
    const [showShare, updateShowShare] = useState(false);

    /*States para mostrar lista filtrada*/
    const [loading, setLoadingSearch] = useState(false);
    const [search, setSearch] = useState('')

    /*State para Ejemplos*/
    const [showExamples, updateShowExamples] = useState(false);



    return (
        <Fragment>
            {/*Si showWelcome es true, entonces que muestre WelcomeScreen*/}
            {showWelcome ?
                <Welcome
                updateShowWelcome={updateShowWelcome}
            />
            : /*Si el showWelcome es false, que muestre el mainScreen*/
                <Router>
                    {/*Lista de contadores con busqueda incluida*/}

                        <ListCounters
                            counters={counters}

                            createCounter={createCounter}
                            saveCounters={saveCounters}
                            counter={counter}
                            savecreateCounter={savecreateCounter}

                            updateShowDelete={updateShowDelete}
                            updateShowShare={updateShowShare}
                            captIdToSave={captIdToSave}

                            setSearch={setSearch}
                            search={search}

                            setLoadingSearch={setLoadingSearch}
                            loading={loading}

                        />

                    {/*Crear Contador Nuevo*/}
                    <CreateCounter
                        saveCounter={saveCounter}
                        savecreateCounter={savecreateCounter}

                        updateShowExamples={updateShowExamples}

                    />

                    {showDelete ?
                        <Delete
                            updateShowDelete={updateShowDelete}
                            idToSave={idToSave}
                            updateShowShare={updateShowShare}

                            counter={counter}
                        />
                    : null}

                    {showShare ?
                        <Share
                            updateShowShare={updateShowShare}
                            idToSave={idToSave}
                        />
                    : null}

                    {showExamples ?
                     <Examples
                         showExamples={showExamples}
                         updateShowExamples={updateShowExamples}
                     />
                    : null}

                </Router>
            }
        </Fragment>
    );
}

export default App;

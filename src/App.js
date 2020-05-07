import React,{Fragment, useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';

/*Components*/
import Welcome from "./components/Welcome/Welcome";
import CreateCounter from "./components/Counters/Create Counter/CreateCounter";
import ListCounters from "./components/Counters/List Counters/ListCounters";
import Delete from "./components/Functions/Delete/Delete";
import Share from "./components/Functions/Share/Share";
import Examples from "./components/Counters/Examples/Examples";

function App() {

    const [showWelcome, updateShowWelcome] = useState(true);      /*State de WelcomeScreen*/
    const [counters, saveCounters] = useState([]);                /*State de los Contadores*/
    const [showDelete, updateShowDelete] = useState(false);       /*State Mostrar Delete*/
    const [idToSave, captIdToSave] = useState('');                /*State para captar el registro clickeado*/
    const [showShare, updateShowShare] = useState(false);         /*State Mostrar Share*/
    const [search, setSearch] = useState('');                     /*State para mostrar lista filtrada*/
    const [showExamples, updateShowExamples] = useState(false);   /*State para Ejemplos*/


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
                            saveCounters={saveCounters}

                            updateShowDelete={updateShowDelete}
                            updateShowShare={updateShowShare}

                            captIdToSave={captIdToSave}
                            idToSave={idToSave}

                            setSearch={setSearch}
                            search={search}
                        />

                    {/*Crear Contador Nuevo*/}
                    <CreateCounter
                        saveCounters={saveCounters}
                        counters={counters}
                        updateShowExamples={updateShowExamples}

                    />

                    {showDelete ?
                        <Delete
                            updateShowDelete={updateShowDelete}
                            idToSave={idToSave}
                            updateShowShare={updateShowShare}

                            saveCounters={saveCounters}

                            counters={counters}
                        />
                    : null}

                    {showShare ?
                        <Share
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

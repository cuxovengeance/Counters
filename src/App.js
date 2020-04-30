import React,{Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Components*/
import Welcome from "./components/Welcome";
import CreateCounter from "./components/CreateCounter";
import ListCounters from "./components/ListCounters";
import Delete from "./components/Delete";


function App() {
    /*State de WelcomeScreen
    * Lo inicio el true, porque es lo primero que se muestra en pantalla
    * al iniciar la app*/
    const [showWelcome , updateShowWelcome] = useState(true);

    /*State Mostrar Delete*/
    const [showDelete, updateShowDelete] = useState(false);

    /*State para captar id*/
    const [idToSave, captIdToSave] = useState('');


    return (
        <Fragment>
            {/*Si showWelcome es true, entonces que muestre WelcomeScreen*/}
            {showWelcome ?
                <Welcome
                updateShowWelcome={updateShowWelcome}
            />
            : /*Si el showWelcome es false, que muestre el mainScreen*/
                <Router>
                    {/*Como el botón de agregar counter se muestra siempre, lo dejo fuera del Switch*/}
                    <CreateCounter/>

                    {showDelete ?
                        <Delete
                            updateShowDelete={updateShowDelete}
                            idToSave={idToSave}
                        />
                    : null}

                    <ListCounters
                        updateShowDelete={updateShowDelete}
                        captIdToSave={captIdToSave}
                    />

                    <Switch>

                    </Switch>
                </Router>
            }

        </Fragment>
    );
}

export default App;

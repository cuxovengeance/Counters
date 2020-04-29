import React,{Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Components*/
import Welcome from "./components/Welcome";
import CreateCounter from "./components/CreateCounter";
import ListCounters from "./components/ListCounters";


function App() {
    /*State de WelcomeScreen
    * Lo inicio el true, porque es lo primero que se muestra en pantalla
    * al iniciar la app*/
    const [showWelcome , updateShowWelcome] = useState(true);

    /*State de un contador*/
    const [counter, saveCounter] = useState({});



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
                    <CreateCounter
                        saveCounter={saveCounter}
                    />

                    <ListCounters/>

                    <Switch>

                    </Switch>
                </Router>
            }

        </Fragment>
    );
}

export default App;

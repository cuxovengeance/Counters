import React,{Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import shortid from 'shortid';

/*Components*/
import Welcome from "./components/Welcome";
import CreateCounter from "./components/CreateCounter";

/*Functions*/


function App() {
    /*State de WelcomeScreen*/
    const [showWelcome , updateShowWelcome] = useState(true);

    /*State de los Contadores*/
    const[counters, updateCounters] = useState([]);

    /*State de un contador*/
    const [counter, saveCounter] = useState({
        id:shortid.generate(),
        title:'',
        count: 0
    });

    /*UseEffect */

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

                    <Switch>

                    </Switch>
                </Router>
            }

        </Fragment>
    );
}

export default App;

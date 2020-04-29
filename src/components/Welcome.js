import React, {Fragment} from "react";
import '../index.css';

const Welcome = ({updateShowWelcome}) => {

    /*extraigo updateShowWelcome de mi App.js
    Función hideWelcome, ArrowFunction que cambia el estado de
     updateShowWelcome a false para que se oculte una vez que
     se hace click en el botón Get Started*/
    const hideWelcome = () => { updateShowWelcome (false)};

    return(
        <Fragment>
            <div className="GetStarted">
                <h1> welcome</h1>

                <button
                    onClick={hideWelcome}
                > Get Started</button>
            </div>

        </Fragment>
    );
};

export default Welcome;

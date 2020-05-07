import React, {Fragment} from "react";
import '../../index.css';
import './welcome.css'
import icon from './svg/Welcome.svg'

const Welcome = ({updateShowWelcome}) => {

    /*extraigo updateShowWelcome de mi App.js
    Función hideWelcome, ArrowFunction que cambia el estado de
     updateShowWelcome a false para que se oculte una vez que
     se hace click en el botón Get Started*/
    const hideWelcome = () => { updateShowWelcome (false)};

    return(
        <Fragment>
            <div className="welcomeContent fade-in">
                <div >
                    <img src={icon} alt="icon"/>
                </div>

                <br/><br/><br/>

                <div >
                    <div className="welcomeTitle">
                        <h1> Welcome to Counters</h1>
                    </div>
                    <br/>

                    <div>
                    <p
                        className="description "
                    >Capture cups of lattes, frapuccinos,
                        or anything else that can be counted. </p>
                    </div>

                    <button
                        onClick={hideWelcome}
                        className="getStartedButton"
                    > <label className="labelGetStarted">Get Started</label>
                    </button>
                </div>

            </div>

        </Fragment>
    );
};

export default Welcome;

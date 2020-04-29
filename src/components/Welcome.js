import React, {Fragment} from "react";
import '../index.css';

const Welcome = ({updateShowWelcome}) => {

    const hideWelcome = (e) => { updateShowWelcome (false)};

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

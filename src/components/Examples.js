import React, {Fragment} from "react";
import Popup from "reactjs-popup";

import '../index.css';

const Examples = ({showExamples,updateShowExamples}) => {
    let drinks = ['Cups of Coffee', 'Glasses of Water', 'Glasses of Juice' , 'Beers', 'Glasses of Fantasy Drink', 'Glasses of Milk'];
    let Food = ['Hot Dogs', 'Burgers', 'Fries', 'Cupcakes eaten', 'Cookies', 'Cereal Bars', 'Pizza Slices', 'Bread with Palta'];
    let Misc = ['Times Sneezed', 'Naps', 'Day dreaming', 'Pet my Dog', 'Watched Videos', 'Songs Listened', 'Lost Calls'];

/*    let randomNumber;
    function getRandomDrink() {
        randomNumber = Math.floor(Math.random() * drinks.length);
        return drinks[randomNumber];
    }

    function getRandomFood() {
        randomNumber = Math.floor(Math.random() * drinks.length);
        return Food[randomNumber];
    }

    function getRandomMisc() {
        randomNumber = Math.floor(Math.random() * drinks.length);
        return Misc[randomNumber];
    }*/


    return(
        <Fragment>
                    <Popup open={showExamples} modal >
                        {close => (
                            <div>
                                <a className="close" onClick={()=> {close(); updateShowExamples(false)}}>
                                    &times;
                                </a>
                                <div className="header"> Examples </div>
                                <hr/>
                                <div>
                                    <span>Select an example to add it to your counters.</span>
                                </div>
                                <br/>

                                <h6>Drinks</h6>
                                <div id="ex1">
                                    <span className="badge badge-pill badge-light">{/*{getRandomDrink()}*/}{drinks[0]}</span>
                                    <span className="badge badge-pill badge-light">{drinks[1]}</span>
                                    <span className="badge badge-pill badge-light">{drinks[2]}</span>
                                </div>
                                <br/>

                                <h6>Food</h6>
                                <div id="ex2">
                                    <span className="badge badge-pill badge-light">{Food[0]}</span>
                                    <span className="badge badge-pill badge-light">{Food[1]}</span>
                                    <span className="badge badge-pill badge-light">{Food[2]}</span>
                                </div>
                                <br/>

                                <h6> Misc</h6>
                                <div id="ex3">
                                    <span className="badge badge-pill badge-light">{Misc[0]}</span>
                                    <span className="badge badge-pill badge-light">{Misc[1]}</span>
                                    <span className="badge badge-pill badge-light">{Misc[2]}</span>
                                </div>
                            </div>
                        )}
                    </Popup>
        </Fragment>
    );
};

export default Examples;

/*
*  */

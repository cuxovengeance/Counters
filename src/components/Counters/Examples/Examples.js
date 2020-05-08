import React, {Fragment} from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import './examples.css'

const Examples = ({showExamples,updateShowExamples}) => {
    let drinks = ['Cups of Coffee', 'Glasses of Water', 'Glasses of Juice' , 'Beers', 'Glasses of Fantasy Drink', 'Glasses of Milk'];
    let Food = ['Hot Dogs', 'Burgers', 'Fries', 'Cupcakes eaten', 'Cookies', 'Cereal Bars', 'Pizza Slices', 'Bread with Palta'];
    let Misc = ['Times Sneezed', 'Naps', 'Day dreaming', 'Pet my Dog', 'Watched Videos', 'Songs Listened', 'Lost Calls'];

    const StyledPopUp = styled(Popup)`
    // use your custom style for ".popup-overlay"
  &-overlay{
   position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 999
  }
  // use your custom style for ".popup-content"
  &-content{
   position: relative;
    background: rgb(255, 255, 255);
    width: 50%;
    margin: auto;
    border: 1px solid rgb(187, 187, 187);
    padding: 5px;
    border-radius: 10px;
    height: 400px;
  }
    `
    return(
        <Fragment>
                <StyledPopUp open={showExamples} modal >
                    {close => (
                        <div>
                            <a className="close closePopUpExamples" data-backdrop="static"  onClick={()=> {close(); updateShowExamples(false)}}>
                                &times;
                            </a>
                            <div className="header TitlePopUp"> Examples </div>
                            <hr/>
                            <div className="selectExample">
                                <span>Select an example to add it to your counters.</span>
                            </div>
                            <br/><br/>

                            <div className="divExamplesContainer">
                                <h3>Drinks</h3>
                                <div id="ex1">
                                    <span className="badge badge-pill badge-secondary examplesBadges" >Cups of Coffee</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{drinks[1]}</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{drinks[2]}</span>
                                </div>
                                <br/><br/>

                                <h3>Food</h3>
                                <div  id="ex2">
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Food[0]}</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Food[1]}</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Food[2]}</span>
                                </div>
                                <br/><br/>

                                <h3> Misc</h3>
                                <div id="ex3">
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Misc[0]}</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Misc[1]}</span>&emsp;
                                    <span className="badge badge-pill badge-secondary examplesBadges">{Misc[2]}</span>
                                </div>
                            </div>

                        </div>
                    )}
                </StyledPopUp>
        </Fragment>
    );
};

export default Examples;


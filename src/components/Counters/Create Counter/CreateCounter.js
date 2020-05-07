import React, {Fragment, useState} from "react";
import Swal from "sweetalert2";
import api from "../../../api";

import './createCounter.css';
import '../../../index.css';
import Error from "../../Errors/Error";

const CreateCounter = ({saveCounters,counters,updateShowExamples}) => {

    const [title, saveName] = useState('');          /*State para captar el nombre*/
    const [error, saveError] = useState(false);      /*Validar Contador - lo inicio en falso porque en un principio no tengo ningun error*/
    /*const [offline, setOffline] = useState(false);*/

    const addCounter = (e) => {
        e.preventDefault();

        /*Validación: si name esta vacio el error pasa a ser verdadero*/
        if (title.trim() === '') {
            saveError(true);
            return;
        }

        /*Si pasa la validación*/
        saveError(false);

        /*Construyo EL contador que estoy agregando*/
        const counter = {title}

        /*llamo la api, le paso la url, los datos*/
        api.post('/api/v1/counter', counter)
            .then(res => res.json())
            .then(res => {saveCounters([...counters,res])
            })
            .catch(error => {
                console.log('Error: ', error);
            });

        /*el saveCounter es para guardar el contador que estoy creando, en
        * este caso hago una copia de lo que ya esta y agrego el nuevo
        * dentro del mismo arreglo*/

        /*Reset del Form*/
        saveName('');

        /*Avisar Que se Registro*/
        Swal.fire(
            'Good job!',
            'Counter Saved!',
            'success'
        )
    };

    const showExamplesPopup = () => {updateShowExamples(true)}

    return(
        <Fragment>
            <hr className="positionSeparator"/>

            <button type="button" className="btn buttonCreate fade-in" data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-plus buttonCreateIcon "> </i>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document" >
                    <div className="modal-content modalSizeCreate">
                        <div className="modal-header headerCreate">
                            <h5 className="modal-title TitleCreateCounterModal" id="exampleModalLabel">Create Counter</h5>
                            <button type="button" className="close closeModalCreate" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <form onSubmit={addCounter} >
                            <button
                                type="submit"
                                id="submit"
                                className="btn saveCounterButton"
                                value="Save"
                                onClick={() => {updateShowExamples(false);}}
                            > Save </button>

                              {/*  {/!*En caso de que exista un Error mostrará un mensaje*!/}*/}
                                {error ?
                                    <Error/>
                                    : null}

                                <div>
                                    <label className="nameCreateCounter "> Name </label>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Cups of Coffee"
                                    className="WidthName inputCreateCounter input"
                                    value={title}
                                    onChange={ e => saveName(e.target.value)}
                                />

                                <br/>
                                <br/>

                                    <div className="container marginFooterCreateCounterForm">
                                        <span
                                            className="text-muted"
                                            data-dismiss="modal">
                                            Give it a name. Creative block? See <u><span onClick={()=> showExamplesPopup(true)}> examples.</span></u></span>
                                    </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateCounter;

{/*               <Popup className="cajita" open={isOpen} modal>
                    {close => (
                        <div className="modal">
                            <a
                                className="close"
                               onClick={() => {
                                close();
                                updateShowExamples(false);
                                updateIsOpen(false);
                               }}>
                                &times;
                            </a>

                            <div className="header"> Create New Counter </div>
                            <div className="content">

                                Formulario para agregar un Counter
                                <form onSubmit={addCounter} >
                                    En caso de que exista un Error mostrará un mensaje
                                    {error ? alert("ERROR")
                                        : null}

                                    <label className="modal "> Name </label>
                                    <input
                                        type="text"
                                        placeholder="Cups of Coffee"
                                        className="WidthName"
                                        value={title}
                                        onChange={ e => saveName(e.target.value)}
                                    />

                                    <button
                                        type="submit"
                                        className="button-primary"
                                        value="Save"
                                        onClick={() => {updateShowExamples(false)}}
                                    > Save </button>

                                </form>

                                <div className="container marginFooterCreateCounterForm">
                                    <span className="text-muted">Give it a name. Creative block? See <u><span onClick={()=> showExamplesPopup(true)}> examples. </span></u>  </span>
                                </div>

                            </div>
                        </div>
                    )}
                </Popup>*/}


/*<div className="modal fade"
     tabIndex="-1"
     role="dialog"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div className="modal-dialog" role="document" >
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create New Counter</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {/!*Formulario para agregar un Counter*!/}
                <form onSubmit={addCounter} >
                    {/!*En caso de que exista un Error mostrará un mensaje*!/}
                    {error ? alert("ERROR")
                        : null}

                    <label className="modal "> Name </label>
                    <input
                        type="text"
                        placeholder="Cups of Coffee"
                        className="WidthName"
                        value={title}
                        onChange={ e => saveName(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button
                            type="submit"
                            id="submit"
                            className="button-primary"
                            value="Save"
                            onClick={() => {updateShowExamples(false);}}
                        > Save Counter</button>

                        <div className="container marginFooterCreateCounterForm">
                                        <span className="text-muted" data-dismiss="modal">Give it a name. Creative block? See <u><span
                                            onClick={()=> showExamplesPopup(true)}
                                        > examples. </span></u> </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>*/

/*        const callApi = () => {
            fetch('/api/v1/counter', {
                method: 'post',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(counter)
            })
                .then(res => res.json())
                .then(res => {
                    saveCounters([...counters,res])
                })
        }*/
/*Le paso los datos a la API para hacer el POST*/
/*  callApi(counter);*/

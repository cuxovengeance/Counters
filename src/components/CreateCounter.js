import React, {Fragment, useState} from "react";
import Swal from "sweetalert2";

import '../CSS/createCounter.css';
/*import '../index.css';*/

const CreateCounter = ({saveCounter,savecreateCounter,updateShowExamples}) => {

    /*State */
    const [title, saveName] = useState('');

    /*Validar Contador - lo inicio en falso porque en un principio no tengo ningun error*/
    const [error, saveError] = useState(false);

    /*Cerrar: empieza en false para que al hacer click en el boton pase a true*/
    const[isOpen, updateIsOpen] = useState(false);


    const openPopup = () => {
        updateIsOpen(true);
    }

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

        /*console.log(counter);*/

        const callApi = () => {
            fetch('/api/v1/counter', {
                method: 'post',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(counter)
            })
                .then(res => res.json())
                .then(res => saveCounter(res))
        }

        /*el saveCounter es para guardar el contador que estoy creando*/
        /*Le paso los datos a la API para hacer el POST*/
        callApi(counter);

        savecreateCounter(true);

        /*Reset del Form*/
        saveName('');

        /*Avisar Que se Registro*/
        Swal.fire(
            'Good job!',
            'Counter Saved!',
            'success'
        )
        /*Cerrar*/
    };

    const showExamplesPopup = () => {
        updateShowExamples(true)
    }

    return(
        <Fragment>
            <hr className="positionSeparator"/>

            <button onClick={() => {openPopup()}} type="button" className="btn buttonCreate" data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-plus buttonCreateIcon "> </i>
            </button>
            <div className="modal fade"
                 id="exampleModal"
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
                            {/*{/!*Formulario para agregar un Counter*!/}*/}
                            <form onSubmit={addCounter} >
                              {/*  {/!*En caso de que exista un Error mostrará un mensaje*!/}*/}
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

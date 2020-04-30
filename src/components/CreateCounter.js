import React, {Fragment, useState} from "react";
import Popup from "reactjs-popup";

import '../index.css';

const CreateCounter = () => {

    /*State */
    const [title, saveName] = useState('');

    /*Validar Contador - lo inicio en falso porque en un principio no tengo ningun error*/
    const [error, saveError] = useState(false);

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

/*        console.log(counter);*/

        const callApi = () => {
            fetch('/api/v1/counter', {
                method: 'post',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(counter)
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }

        /*Le paso los datos a la API para hacer el POST*/
        callApi(counter);

        /*Reset del Form*/
        saveName('');

        /*Cerrar*/
    };


    return(
        <Fragment>

            <Popup trigger={<button className="button buttonCreateCounter"> Create Counter </button>} modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}> &times; </a>
                        <div className="header"> Create New Counter </div>
                        <div className="content">

                            {/*Formulario para agregar un Counter*/}
                            <form onSubmit={addCounter}>
                                {/*En caso de que exista un Error mostrará un mensaje*/}
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
                                > Save</button>
                            </form>

                            <div className="container marginFooterCreateCounterForm">
                                <span className="text-muted">Give it a name. Creative block? See EXAMPLES</span>
                            </div>

                        </div>
                    </div>
                )}
            </Popup>

        </Fragment>
    );
};

export default CreateCounter;

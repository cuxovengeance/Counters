import React, {Fragment} from "react";
import Popup from "reactjs-popup";
import '../CSS/delete.css'


const Delete = ({updateShowDelete,idToSave}) => {

    /*console.log(JSON.stringify(idToSave));*/

    const deleteCount = () => {
        const id = idToSave.id;
        const body = {
            'id': id
        };

        fetch('/api/v1/counter', {
            method: 'delete',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return(
        <Fragment>
            <Popup trigger={<button className="button buttonDelete"><i className="fas fa-trash-alt"> </i> </button>} modal>
                {close => (
                    <div className="modal">
                        <div className="actions">
                            <button
                                className="button buttonCancel"
                                onClick={() => {
                                    close();
                                    updateShowDelete(false)
                                }}
                            > Cancel </button>

                            <button className="buttonDeleteSecond" onClick={() => {
                                deleteCount();
                                close();
                            }}> Delete </button>
                        </div>
                    </div>
                )}
            </Popup>
        </Fragment>
    );
};

export default Delete;

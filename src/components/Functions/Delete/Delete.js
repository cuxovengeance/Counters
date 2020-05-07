import React, {Fragment} from "react";
import api from "../../../api";
import './delete.css'

const Delete = ({updateShowDelete,idToSave,updateShowShare,saveCounters,counters}) => {

    const deleteCount = () => {
        const id = idToSave.id;

        const body = {
            'id': id
        };

        api.delete('/api/v1/counter',body)
            .then(res => res.json())
            .then(res => {
                counters = counters.filter(data => data.id !== res);
                saveCounters(counters);
                return null;
            })
    }

    return(
        <Fragment>

            <button type="button" className="button buttonDelete" data-toggle="modal" data-target="#staticBackdrop">
                <i className="fas fa-trash-alt iconTrash"> </i>
            </button>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">

                <div className="modal-dialog modalLocation" role="document">
                    <div className="modal-content modalSizeDelete">

                        <div className="modalTitleCenter">
                            <h5 className="h5Style">Delete modal "{idToSave.title}" counter?</h5>
                        </div>


                        <div className="modalbodyCenter">
                            <p className="pStyleDelete">This cannot be undone.</p>
                        </div>

                        <div className="buttonsPosition">
                            <button type="button"
                                    className="btn buttonCancelDelete"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        updateShowDelete(false);
                                        updateShowShare(false);
                                    }}
                            ><label className="cancelTextButton" >Cancel</label></button>

                            &emsp;&emsp;

                            <button type="button"
                                    className="btn buttonDeleteStyle"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        deleteCount();
                                        updateShowDelete(false);
                                        updateShowShare(false);}}
                            ><label className="DeleteTextButton">Delete</label> </button>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Delete;

/*console.log(JSON.stringify(idToSave));*/

/*<Popup trigger={<button className="button buttonDelete"><i className="fas fa-trash-alt"> </i> </button>} modal>
                    {close => (
                        <div>
                            <div className="actions">
                                <button
                                    className="button buttonCancel"
                                    onClick={() => {
                                        close();
                                        updateShowDelete(false);
                                        updateShowShare(false);
                                    }}
                                > Cancel </button>

                                <button className="buttonDeleteSecond" onClick={() => {
                                    deleteCount();
                                    close();
                                    updateShowDelete(false);
                                    updateShowShare(false);
                                }}> Delete </button>
                            </div>
                        </div>
                    )}
                </Popup>*/

/*                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title modalTitleCenter" id="staticBackdropLabel">Delete modal "{idToSave.title}" counter?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body modalbodyCenter">
                            This cannot be undone.
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        updateShowDelete(false);
                                        updateShowShare(false);
                                    }}
                            >Cancel</button>
                            <button type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        deleteCount();
                                        updateShowDelete(false);
                                        updateShowShare(false);}}
                            > Delete </button>
                        </div>
                    </div>*/

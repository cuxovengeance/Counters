import React, {Fragment} from "react";
import api from "../../../api";
import './delete.css'
import '../../../index.css';


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
            .catch(error => {
                console.log('Error:', error);
            })
    }

    return(
        <Fragment>

            <button type="button" className="button buttonDelete fade-in" data-toggle="modal" data-target="#staticBackdrop">
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

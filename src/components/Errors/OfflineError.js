import React, {Fragment} from "react";

const OfflineError = () => {
    return(
        <Fragment>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modalLocation" role="document">
                    <div className="modal-content modalSizeDelete">
                        <div className="">
                            <h5 className=""> Couldn't </h5>
                        </div>

                        <div className="">
                            <p className="">The Internet connection appears to be offline.</p>
                        </div>

                        <div className="">
                            <button type="button"
                                    className=""
                                    onClick={() => {}}
                            ><label className="" >Retry</label></button>

                            &emsp;&emsp;

                            <button type="button"
                                    className=""
                                    data-dismiss="modal"
                                    onClick={() => {}}
                            >Dismiss</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default OfflineError;

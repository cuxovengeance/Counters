import React, {Fragment} from "react";

const Error = () => {
    return(
        <Fragment>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Couldn’t create counter</strong> You should check in on some of those fields below.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </Fragment>
    );
};

export default Error;

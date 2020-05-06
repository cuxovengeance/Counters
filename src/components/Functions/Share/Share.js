import React from "react";
import Popup from "reactjs-popup";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Swal from "sweetalert2";

import './share.css'
import paperNote from './svg/PaperNote.svg';

const Share = ({idToSave}) => {

    const title = idToSave.title;
    const count = idToSave.count;
    const completeText = count + " x " + title;

    const alertSuccess = () => {
        Swal.fire(
            'Copy!',
            'Copy In The Clipboard !',
            'success'
        )
    }

    return(
        <Popup
            trigger={<button className="button buttonShare">
                <i className="fa fa-share-square-o iconShare"> </i>
            </button>}
            position="top center"
            on="hover"
            className="popupShare"
        >
            <div>
                <label className="labelShare"> Share 1 Counter&nbsp;</label>
                <label className="labelShare">{completeText}</label>
                {/*<img src={paperNote} className="paperNotecss" alt="paperNote"/>*/}

                <CopyToClipboard text={completeText}>
                    <button onClick={alertSuccess} className="button buttonCopy"><label className="textCopyButton">Copy</label> </button>
                </CopyToClipboard>
            </div>

        </Popup>
    );
};

export default Share;

/*console.log(JSON.stringify(idToSave))*/
/*console.log(completeText);*/

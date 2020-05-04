import React from "react";
import Popup from "reactjs-popup";
import Swal from "sweetalert2";
import {CopyToClipboard} from "react-copy-to-clipboard";


import '../CSS/share.css'
import paperNote from '../svg/PaperNote.svg'


const Share = ({updateShowShare,idToSave}) => {
    /*console.log(JSON.stringify(idToSave))*/
    const title = idToSave.title;
    const count = idToSave.count;
    const completeText = count + " x " + title;

    /*console.log(completeText);*/

    const alertSuccess = () => {
        Swal.fire(
            'Copy!',
            'Copy In The Clipboard !',
            'success'
        )
    }
    return(
        <Popup
            trigger={<button className="button buttonShare "> <i className="fa fa-share-square-o"> </i> </button>}
            position="top center"
            on="hover"
            className="popupShare"
        >
            <div>
                <label className="labelShare"> Share 1 Counter</label>
                <label className="labelShare"> {completeText}</label>
                <img src={paperNote} className="paperNotecss" alt="paperNote"/>


                <CopyToClipboard text={completeText}>
                    <button onClick={alertSuccess} className="button buttonCopy"> Copy </button>
                </CopyToClipboard>
            </div>

        </Popup>
    );
};

export default Share;

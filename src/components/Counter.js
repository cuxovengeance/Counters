import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

const Counter = ({counter,updateShowDelete,captIdToSave,updateShowShare}) => (
        <p
            onClick={() => {
                updateShowDelete(true);
                updateShowShare(true);
                captIdToSave(counter);
            }}
        >
            {counter.title}

            &emsp; &emsp; &emsp;

            <Decrement
                counter={counter}
            />
            {counter.count}
            <Increment
                counter={counter}
            />
        </p>
);

export default Counter;

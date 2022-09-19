import React from "react";

function Story({
    id,
    handleRemove,
    noun,
    adjective
})
{
    const remove = () => handleRemove(id);

    return (
        <div>
            <p>
                {`I am a ${adjective} ${noun}`}
            </p>
            <button onClick={remove}>Restart</button>
        </div>
    )
}

export default Story;

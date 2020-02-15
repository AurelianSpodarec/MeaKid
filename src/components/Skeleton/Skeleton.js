import React from 'react';

function Skeleton({ width, height }) {

    // Default Width 100%
    // Default height 50px

    //Specify width and height

    return (
        <div className="skeleton" styles={{ width, height }}>
            Hello
        </div>
    )
}

export default Skeleton;
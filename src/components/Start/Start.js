import React from 'react';

import css from './Start.module.css'
const Start = ({info}) => {
    const {mission_name,launch_year,links:{mission_patch_small}}=info
    return (
        <div className={css.startBox}>
            <div><b>Name mission:</b>{mission_name}</div>
            <div><b>Launch year:</b>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Start};
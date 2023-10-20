import React, {useEffect, useState} from 'react';

import {startingService} from "../Services/startingService"
import {Start} from "../Start/Start";
import css from './Starts.module.css'

const Starts = () => {
    const [starts,setStarts]=useState([])
    useEffect(()=>{
        startingService.getAll().then(({data}) =>setStarts(data.filter(data=>data.launch_year!=='2020')))
    },[])
    return (
        <div className={css.startsBox}>
            {starts.map(start=><Start key={start.mission_name} info={start}/>)}
        </div>
    );
};

export {Starts};
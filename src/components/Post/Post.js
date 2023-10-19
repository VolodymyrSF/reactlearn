import React from 'react';

import style from './Post.module.css'
const Post = ({info,click}) => {
    const {id,title}=info
    return (
        <div className={style.post}>
            <h3 className={style.point}><b>id:</b>{id}</h3>
            <h3 className={style.point}><b>title:</b>{title}</h3>
            <button className={style.button} onClick={()=>click(id)}>more</button>

        </div>
    );
};

export {Post};
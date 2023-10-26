import React from 'react';

import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo
    return (
        <div className={css.div}>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>completed:{`${completed}`}</div>
        </div>
    );
};

export {Todo};
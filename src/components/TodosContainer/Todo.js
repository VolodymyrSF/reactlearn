import React from 'react';

const Todo = ({todo}) => {
    const {userId,id,title,complite}=todo
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>complite:{complite}</div>
        </div>
    );
};

export {Todo};
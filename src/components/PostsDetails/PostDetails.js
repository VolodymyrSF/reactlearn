import React from 'react';

import style from './PostDetails.module.css'
const PostDetails = ({postDetails}) => {
    const {userId,id,title,body}=postDetails
    return (
        <div className={style.details}>
            <div><b>userId:</b> {userId}</div>
            <div><b>id:</b>{id}</div>
            <div><b>title:</b>{title}</div>
            <div><b>body:</b>{body}</div>
        </div>
    );
};

export {PostDetails};
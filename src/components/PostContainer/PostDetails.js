import React from 'react';
import {useNavigate} from "react-router-dom";
const PostDetails = ({post}) => {

const {userId,id,title,body}=post

    const navigate=useNavigate()
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>navigate('comments')}>Comments to this post</button>
        </div>
    );
};

export {PostDetails};
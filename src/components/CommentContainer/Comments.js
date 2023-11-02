import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {useParams} from "react-router-dom";
import {Comment} from "./Comment";

const Comments = () => {
    const {postId}=useParams()

    const [comments,setComments]=useState([])

    useEffect(()=>{
        commentsService.getComments(postId).then(({data})=>setComments(data))
    },[])
    return (
        <div>
            {comments.map(comment=><Comment comment={comment}/>)}
        </div>
    );
};

export {Comments};
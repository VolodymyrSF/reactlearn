import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postsService} from "../services/postsService";
import {PostDetails} from "../components/PostContainer/PostDetails";

const PostDetailPage = () => {
    const {postId}=useParams()

    const [post,setPost]=useState([])

    useEffect(()=>{
        postsService.getByPostId(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <div>
            <PostDetails post={post}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailPage};
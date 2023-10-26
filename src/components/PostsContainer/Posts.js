import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {postsService} from "../../services/postsService";

const Posts = ({postId}) => {
    const [post,setPosts] = useState([]);

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPosts(data))
    },[postId])
    return (
        <div>
            <Post key={post.postId} post={post}/>
        </div>
    );
};

export {Posts};
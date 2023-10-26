import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {postsService} from "../../services/postsService";

const Posts = ({postId}) => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPosts(data))
    },[postId])
    console.log(posts)
    return (
        <div>
            {posts.map(post=><Post key={post.postId} post={post}/>)}
        </div>
    );
};

export {Posts};
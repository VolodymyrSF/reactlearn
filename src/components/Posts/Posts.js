import React, {useEffect, useState} from 'react';

import style from './Posts.module.css'
import {Post} from "../Post/Post";
import {PostService} from "../Services/PostService";
import {PostDetails} from "../PostsDetails/PostDetails";

const Posts = () => {
    const [posts,setPosts]=useState([])
    const [postDetails,setPostDetails]=useState(null)
    useEffect(()=> {
       PostService.getAll().then(({data})=>setPosts(data))
    },[])
    const click=async (id)=> {
        const {data} = await PostService.getById(id);
        setPostDetails(data)
    }
    return (<div>


        <div className={style.posts}>
            {posts.map(postone=><Post key={postone.id} info={postone} click={click} />)}
        </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    )
}

export  {Posts};
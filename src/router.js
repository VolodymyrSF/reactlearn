import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailPage} from "./pages/UserDetailPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailPage} from "./pages/PostDetailPage";
import {CommentsPage} from "./pages/CommentsPage";
const router=createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={'users'}/>},

            {path:'users',element:<UsersPage/>},

            {path:'users/:userId',element:<UserDetailPage/>,children:[
                    {path:'posts',element:<PostsPage/>}
                ]},

            {path:'users/:userId/posts/:postId',element:<PostDetailPage/>,children:[
                    {path:'comments',element:<CommentsPage/>}
                ]}
        ]}
])

export {router}
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";

const router=createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
            {index:true ,element:<Navigate to={'todos'}/>},
            {path:'todos',element:<TodosPage/>},
            {path:'albums',element:<AlbumsPage/>},
            {path:'comments',element:<CommentsPage/>,children:[
                    {path:'posts',element:<PostsPage/>}
                ]}
        ]},

])

export {router}
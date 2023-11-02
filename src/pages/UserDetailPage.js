import React, {useEffect, useState} from 'react';

import {usersService} from "../services/usersService";
import {UserDetails} from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";

const UserDetailPage = () => {

    const {userId}=useParams()

    const [user,setUser]=useState([])

    useEffect(()=>{
        usersService.getByUserId(userId).then(({data})=>setUser(data))
    },[userId])

    return (
        <div>
            <UserDetails user={user}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailPage};
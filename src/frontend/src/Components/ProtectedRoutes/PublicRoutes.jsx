import { useAuth } from "../../Hooks/UseAuth";
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoutes(){
    const { user } = useAuth();

    return user ? <Navigate to="/" /> : <Outlet />;
}
export default PublicRoutes;
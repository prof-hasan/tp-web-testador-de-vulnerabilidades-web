import { useAuth } from "../../Hooks/UseAuth";
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function SecuredRoutes(){
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to="/" />;
}
export default SecuredRoutes;
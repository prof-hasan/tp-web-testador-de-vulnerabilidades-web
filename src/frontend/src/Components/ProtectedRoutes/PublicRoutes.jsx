import { useAuth } from "../../Hooks/UseAuth";
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoutes() {
    const { user } = useAuth();

    return user ? <Navigate to="/" /> : <Outlet />;
}

PublicRoutes.propTypes = {
    user: PropTypes.object
};

export default PublicRoutes;
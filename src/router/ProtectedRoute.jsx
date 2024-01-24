import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {

    const key = useSelector((state) => state.key.key)


    if (!key) {
        return <Navigate to="/enter-key" replace />
    } else {
        return element
    }



}

export default ProtectedRoute

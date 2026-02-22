import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFFDEE] dark:bg-[#06231D]">
                <div className="w-8 h-8 rounded-full border-4 border-[#076653] border-t-transparent animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect them to the /app (which is now auth page) or just explicit /auth
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;

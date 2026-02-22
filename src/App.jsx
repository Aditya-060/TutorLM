import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Workspace from './pages/Workspace';
import Uploads from './pages/Uploads';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import Practice from './pages/Practice';
import SavedDoubts from './pages/SavedDoubts';
import Progress from './pages/Progress';
import WeakTopics from './pages/WeakTopics';
import Collaborative from './pages/Collaborative';
import Auth from './pages/Auth';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// A helper component to conditionally wrap the app in the Layout if not on the landing page
const AppRoutes = () => {
    const location = useLocation();

    // We only want the Layout (sidebar, specific backgrounds) for the app pages, not the landing page
    const isLandingPage = location.pathname === '/';

    if (isLandingPage) {
        return (
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        );
    }

    const isAuthPage = location.pathname === '/auth';
    if (isAuthPage) {
        return (
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        );
    }

    return (
        <ProtectedRoute>
            <Layout>
                <Routes>
                    <Route path="/app" element={<Dashboard />} />
                    <Route path="/workspace" element={<Workspace />} />
                    <Route path="/uploads" element={<Uploads />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/saved" element={<SavedDoubts />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/weak-topics" element={<WeakTopics />} />
                    <Route path="/collaborative" element={<Collaborative />} />
                </Routes>
            </Layout>
        </ProtectedRoute>
    );
};

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;

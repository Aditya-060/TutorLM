import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Sparkles, ArrowRight, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login, signup } = useAuth();
    const { darkMode } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    // Where to redirect after login (default to /app)
    const from = location.state?.from?.pathname || '/app';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isLogin) {
                const result = await login(email, password);
                if (result.success) {
                    navigate(from, { replace: true });
                } else {
                    setError(result.error || 'Invalid credentials. Please try again.');
                }
            } else {
                if (!name || !email || !password) {
                    setError('Please fill in all fields.');
                    setIsLoading(false);
                    return;
                }
                const result = await signup(email, password, name);
                if (result.success) {
                    // Update user flow context - normally you might want to save naming details 
                    // to a profile table. Sticking with core auth here to keep it simple.
                    navigate(from, { replace: true });
                } else {
                    setError(result.error || 'Failed to create account. Please try again.');
                }
            }
        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FFFDEE] via-[#E2FBCE]/30 to-[#FFFDEE] dark:from-[#06231D] dark:via-[#06231D] dark:to-[#0C342C] font-sans relative overflow-hidden`}>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#076653]/10 dark:bg-[#E2FBCE]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/60 dark:bg-[#0C342C]/40 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden relative z-10 p-8 sm:p-10">

                {/* Logo Area */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-[#076653] dark:bg-[#E2FBCE] p-3 rounded-2xl mb-4 shadow-lg">
                        <Sparkles className="w-6 h-6 text-white dark:text-[#0f172a]" />
                    </div>
                    <h1 className="text-3xl font-black text-brand-text dark:text-white tracking-tight">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-brand-text/60 dark:text-white/60 font-medium mt-2 text-center text-sm">
                        {isLogin
                            ? 'Enter your credentials to access your workspace'
                            : 'Sign up to start mastering your subjects with AI'}
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                        <div className="relative">
                            <label className="block text-xs font-bold text-brand-text/80 dark:text-white/80 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                            <div className="relative border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-[#06231D]/50 focus-within:border-[#076653] dark:focus-within:border-[#E2FBCE] focus-within:ring-1 focus-within:ring-[#076653] dark:focus-within:ring-[#E2FBCE] transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-black/40 dark:text-white/40" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-brand-text dark:text-white font-medium placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="John Doe"
                                    autoComplete="name"
                                />
                            </div>
                        </div>
                    )}

                    <div className="relative">
                        <label className="block text-xs font-bold text-brand-text/80 dark:text-white/80 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                        <div className="relative border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-[#06231D]/50 focus-within:border-[#076653] dark:focus-within:border-[#E2FBCE] focus-within:ring-1 focus-within:ring-[#076653] dark:focus-within:ring-[#E2FBCE] transition-all">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-black/40 dark:text-white/40" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-brand-text dark:text-white font-medium placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-0 sm:text-sm"
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex items-center justify-between mb-1.5 px-1">
                            <label className="block text-xs font-bold text-brand-text/80 dark:text-white/80 uppercase tracking-wider">Password</label>
                            {isLogin && (
                                <button type="button" className="text-xs font-bold text-[#076653] dark:text-[#E2FBCE] hover:underline">
                                    Forgot password?
                                </button>
                            )}
                        </div>
                        <div className="relative border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-[#06231D]/50 focus-within:border-[#076653] dark:focus-within:border-[#E2FBCE] focus-within:ring-1 focus-within:ring-[#076653] dark:focus-within:ring-[#E2FBCE] transition-all">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-black/40 dark:text-white/40" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-brand-text dark:text-white font-medium placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-0 sm:text-sm"
                                placeholder="••••••••"
                                required
                                autoComplete={isLogin ? "current-password" : "new-password"}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white dark:text-[#0f172a] bg-[#076653] hover:bg-[#0C342C] dark:bg-[#E2FBCE] dark:hover:bg-[#076653] dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#076653] disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                {isLogin ? 'Sign In' : 'Create Account'}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </>
                        )}
                    </button>

                    {/* Optional Social Layout Box (Visual only) */}
                    <div className="mt-6 flex items-center justify-center space-x-4">
                        <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
                        <span className="text-xs font-semibold text-brand-text/40 dark:text-white/40 uppercase tracking-widest">or continue with</span>
                        <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
                    </div>

                    <button type="button" className="w-full flex justify-center items-center py-3.5 px-4 border border-black/10 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-sm font-bold text-brand-text dark:text-white transition-colors">
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </button>

                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        className="text-sm font-semibold text-brand-text/70 dark:text-white/70 hover:text-brand-text dark:hover:text-white transition-colors"
                    >
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span className="text-[#076653] dark:text-[#E2FBCE] ml-1">{isLogin ? 'Sign up' : 'Log in'}</span>
                    </button>
                </div>
            </div>

            {/* Navigational back to landing overlay button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 text-sm font-bold text-brand-text/60 dark:text-white/60 hover:text-brand-text dark:hover:text-white transition-colors flex items-center z-20"
            >
                ← Back to Home
            </button>
        </div>
    );
};

export default Auth;

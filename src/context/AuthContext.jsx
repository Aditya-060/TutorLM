import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the active session on mount
        const getSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error getting session:", error.message);
            }
            setUser(session?.user ?? null);
            setLoading(false);
        };

        getSession();

        // Listen for authentication state changes (login, logout, token refresh)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const signup = async (email, password, name) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name
                }
            }
        });

        if (error) return { success: false, error: error.message };

        // Insert into public.profiles table
        if (data?.user) {
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: data.user.id,
                        name: name,
                        email: email
                    }
                ]);

            if (profileError) {
                console.error("Error creating profile:", profileError.message);
                // Optionally handle profile creation fail (though auth succeeded)
            }
        }

        return { success: true, data };
    };

    const updateProfile = async (newName) => {
        try {
            const { data, error } = await supabase.auth.updateUser({
                data: { name: newName }
            });

            if (error) throw error;

            // Also update the public profiles table
            if (user?.id) {
                const { error: updateError } = await supabase
                    .from('profiles')
                    .update({ name: newName })
                    .eq('id', user.id);

                if (updateError) throw updateError;
            }

            // Immediately set local user state to reflect changes before the subscription fires
            setUser(data.user);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) return { success: false, error: error.message };
        return { success: true, data };
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
        }
    };

    const value = {
        user,
        signup,
        login,
        logout,
        updateProfile,
        isAuthenticated: !!user,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

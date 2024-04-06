import React, { useState } from "react";
import { IUser } from "./types";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}:{children: React.ReactNode}) => {
    const [user, setUser] = useState<IUser | null>(null)

    const signIn = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    const signOut = () => {
        setUser(null)
        localStorage.removeItem("authToken")
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
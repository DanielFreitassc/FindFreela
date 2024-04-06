export interface IAuthContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    signIn: (token: string) => void;
    signOut: () => void;
}

export interface IUser {
    id: string;
    name: string;
    type: "developer" | "client";
    function?: string;
}

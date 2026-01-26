import { useContext } from "react";
import { AuthContext } from "../contexts";

export function useAuth() {
    const { auth, setAuth } = useContext(AuthContext);
    return { auth, setAuth };
}
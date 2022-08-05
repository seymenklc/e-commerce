import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStore } from "../store/user";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = useStore(state => state.login);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            setError(null);

            const userCredentials = await signInWithEmailAndPassword(auth, email, password);

            loginUser(userCredentials.user);

            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return [login, isLoading, error];
};
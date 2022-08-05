import { useState } from "react";
import { auth } from "../firebase";
import { useStore } from "../store/user";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useStore(state => state.login);

    const signup = async (email, password, nickname) => {
        try {
            setIsLoading(true);
            setError(null);
            // create a new user
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            // update display name
            await updateProfile(auth.currentUser, { displayName: nickname });
            login(userCredentials.user);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return [signup, isLoading, error];
};
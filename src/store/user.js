import create from "zustand";
import { persist } from "zustand/middleware";

let user = null;

(function checkUser() {
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
        user = existingUser;
    }
    return null;
})();

export const useStore = create(persist(
    (set, get) => ({
        user: user,

        login: (userCredentials) => set({ user: userCredentials }),
        logout: () => set({ user: null })
    }),
    { name: "user" }
));
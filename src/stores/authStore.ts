import { auth } from "~/lib/firebase/firebaseClient";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import type { User } from "~/types/authTypes";

export interface AuthState {
    isLoading: boolean
    user: null | User
}

export const authStore = writable<AuthState>({
    isLoading: true,
    user: null
})

export const authHandlers = {
    // Signup
    async signup(email: string, password: string) {
        await createUserWithEmailAndPassword(auth, email, password)
    },

    // Login
    async login(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password)
    },

    // Logout
    async logout() {
        await signOut(auth)
    },

    // Reset Password
    async resetPassword(email: string) {
        await sendPasswordResetEmail(auth, email)
    },
}
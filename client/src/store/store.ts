import { create } from "zustand";
import { RegistrationApi, LoginApi, AuthApi } from "../api/user.api";
import { UserStore } from "../types/AuthenficateProps.types";

export const store = create<UserStore>((set, get) => ({
    user: null,
    isLoading: false,
    error: null,
    isLogin: false,

    resetAuthState: () => {
        set({
            user: null,
            isLoading: false,
            error: null,
            isLogin: false,
        });
    },

    isLoginAuth: async ({ email, password }) => {
        try {
            set({ isLoading: true, error: null });

            const response = await LoginApi({ email, password });
            
            set({
                user: response,
                isLoading: false,
                isLogin: true,
                error: null,
            });
        } catch (err: any) {
            set({
                isLoading: false,
                isLogin: false,
                error: err.message,
            });
        throw err;
        }
    },

    isRegistrationAuth: async ({ email, password, nikname }) => {
        try {
            set({ isLoading: true, error: null });

            const response = await RegistrationApi({ email, password, nikname });
        
            set({
                user: response,
                isLoading: false,
                isLogin: true,
                error: null,
            });
        } catch (error: any) {
            set({
                isLoading: false,
                isLogin: false,
                error: error.message,
            });
            throw error;
        }
    },

    isVerifyToken: async () => {
        try {
            set({ isLoading: true, error: null });

            const response = await AuthApi();
        
            if (!response) {
                throw new Error('Ваша сессия истекла! Перезайдите на аккаунт');
            }

            set({
                user: response,
                isLoading: false,
                isLogin: true,
                error: null,
            });
        } catch (error: any) {
            set({
                isLoading: false,
                isLogin: false,
                error: error.message,
            });
            throw error;
        }
    },
}));
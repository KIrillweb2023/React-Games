import { create } from "zustand";
import { RegistrationApi, LoginApi, AuthApi } from "../api/user.api";
import { UserStore } from "../types/UserStore.types";
import { UserData } from "../types/AuthenficateProps.types";


export const store = create<UserStore>((set) => ({
    dataUser: {
        user: null,
        error: null,
        isLoading: false,
        isLogin: false
    },

    isLoginAuth: async ({ email, password }) => {
        try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }));

            const response = await LoginApi({ email, password })
            console.log(response)

            set({
                dataUser: {
                    user: response,
                    error: null,
                    isLoading: false,
                    isLogin: true
                }
            })
        } catch(err: any) {
             set({
                dataUser: {
                    ...store.getState().dataUser,
                    error: err.message,
                    isLoading: false,
                    isLogin: false 
                }
            });
            throw err;  
        }
    },

    isRegistrationAuth: async ({ email, password, nikname }) => {
       try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }))

            const response = await RegistrationApi({ email, password, nikname })
            console.log(response)

            set({
                dataUser: {
                    user: response,
                    error: null,
                    isLoading: false,
                    isLogin: true
                }
            })
       } catch (error: any) {
            set({
                dataUser: {
                    ...store.getState().dataUser,
                    error: error.message,
                    isLoading: false,
                    isLogin: false 
                }
            });
            throw error;  
       }
    },

    isVerifyToken: async () => {
        try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }))
            const response = await AuthApi();
            
            if (!response) {
                throw new Error('Ваша сессия истекла! Перезайдите на аккаунт');
            }

            set({
                dataUser: {
                    user: response as UserData,
                    error: null,
                    isLoading: false,
                    isLogin: true
                }
            })

        } catch (error: any) {
            set({
                dataUser: {
                    ...store.getState().dataUser,
                    error: error.message,
                    isLoading: false,
                    isLogin: false 
                }
            });
            throw error;                                                    
        }
    }
    
}))
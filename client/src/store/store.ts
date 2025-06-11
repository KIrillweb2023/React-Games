import { create } from "zustand";
import { auth, login, registration } from "../hooks/UserAPI";
import { UserStore } from "../types/UserStore.types";


export const store = create<UserStore>((set) => ({
    dataUser: {
        user: null,
        error: null,
        isLoading: false
    },

    isLoginAuth: async ({ email, password }) => {
        try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }));

            const response = await login({ email, password })
            console.log(response)

            set({
                dataUser: {
                    user: response,
                    error: null,
                    isLoading: false,
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    isRegistrationAuth: async ({ email, password, nikname }) => {
       try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }))

            const response = await registration({ email, password, nikname })

            set({
                dataUser: {
                    user: response,
                    error: null,
                    isLoading: false
                }
            })
       } catch (error) {
            console.log(error)
       }
    },

    isVerifyToken: async () => {
        try {
            set((state) => ({ dataUser: { ...state.dataUser, isLoading: true, error: null } }))
            const response = await auth();
            
            console.log(response)

            set({
                dataUser: {
                    user: response,
                    error: null,
                    isLoading: false
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
    
}))
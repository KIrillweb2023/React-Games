export interface AuthLayoutValue { 
    email: string;
    password: string;
    nikname?: string
}

export interface UserData { 
    email: string;
    nikname: string;
}

export interface AuthState {  // для стейта юзера в zustand
    user: UserData | null;
    loading: boolean;
    error: string | null;
    isLogin: boolean
}

export interface UserData { // Типы данных, которые хранятся в store.ts / "user" для пользователя
    id: number;
    email: string;
    nikname: string;
}

export interface AuthCredentials { // Это данные которые отправляются при login/registration
  email: string;
  password: string;
  nikname?: string;
}

export interface AuthState { // ?
  user: UserData;
  isLoading: boolean;
  error: string | null;
  isLogin: boolean;
}

export interface UserStore extends AuthState { // это общие типы для store.ts
  isLoginAuth: (credentials: AuthCredentials) => Promise<void>;
  isRegistrationAuth: (credentials: AuthCredentials) => Promise<void>;
  isVerifyToken: () => Promise<void>;
  resetAuthState: () => void;
}

import { createContext } from "react";

type LoginContextType = {
    token?: string
    refresh_token?: string
    setToken?: React.Dispatch<React.SetStateAction<string>>
    setRefreshToken?: React.Dispatch<React.SetStateAction<string>>
}

const LoginContext = createContext<LoginContextType>({})

export default LoginContext
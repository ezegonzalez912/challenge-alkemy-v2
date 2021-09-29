import { useContext, useState } from "react"
import { AuthContext } from "../context/auth/AuthContext"
import { userLogin } from "../services/auth"
import { types } from "../types/types"

interface Data {
    email: string,
    password: string
}

export const useLogin = () => {

    const { dispatch } = useContext(AuthContext)

    const [error, setError] = useState<Boolean>(false)

    const handleLogin = (data: Data) => {
        setError(false)
        const res = new Promise((resolve) => {
            userLogin(data)
            .then( response => {
                setError(false)
                const { token } = response.data;
                dispatch({
                    type: types.logout,
                    payload: token
                })
                return resolve("ok")
            })
            .catch( () => {
                setError(true)
                return resolve("ok")  
            })
        })

        return res;
    }

    const handleLogout = () => {
        dispatch({
            type: types.login,
            payload: null
        })
    }

    return {handleLogin, handleLogout, error}
}

import { useContext, useState } from 'react'
import { StyledForm } from './styles'
import axios from 'axios'
import LoginContext from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import { Config } from '../../config'

export const Login = () => {
    const navigate = useNavigate()
    const context = useContext(LoginContext)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = async (e: unknown): Promise<void> => {
        (e as { preventDefault: () => void }).preventDefault()
        try {
            const result = await axios.post('/login', {
                username: email,
                password: password
            })
            const data = result.data as { ok: boolean, token: string, refresh_token: string }
            if (data.ok) {
                context.setToken!(data.token)
                context.setRefreshToken!(data.refresh_token)
                navigate("/")
            } else {
                alert("Error login")
            }
        } catch(error) {
            alert("Error login")
        }
    }

    return (
        <>
            <StyledForm>
                token: {context.token}
                <br></br>
                refresh_token: {context.refresh_token}
                <h3>Inicia sesion</h3>
                <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <button onClick={handleLogin}>LOG IN</button>
            </StyledForm>
        </>
    )
}

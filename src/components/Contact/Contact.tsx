import { useState } from 'react'
import { StyledForm } from './styles'
import Validator from '../../utils/validator'
import axios from 'axios'

export const Contact = () => {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        // validar datos
        const isNameValid = Validator.name(name)
        const isPhoneValid = Validator.phone(phone)
        const isEmailValid = Validator.email(email)
        const isMessageValid = Validator.message(message)

        if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
            return alert('Datos invalidos')
        }

        try {
            const result = await axios.post('http://localhost:4040/api/contact', {
                name,
                phone,
                email,
                message
            })

            if (result.data.status === 'success') {
                alert('Datos recibidos, contactaremos con usted lo antes posible.')
                resetForm()
            } else {
                alert("Error al enviar datos")
            }
        } catch(e) {
            alert("Error al enviar datos")
            console.log("error: ", e)
        }
    }

    const resetForm = () => {
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <StyledForm>
                <h3>Contacto</h3>
                <input placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Telefono movil" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input placeholder='Correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder='Mensaje' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                <button onClick={handleSubmit}>ENVIAR</button>
            </StyledForm>
        </>
    )
}

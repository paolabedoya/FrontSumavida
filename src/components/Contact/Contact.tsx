import React from 'react'
import { StyledForm } from './styles'

export const Contact = () => {
    return (
        <>
            <StyledForm>
                <h3>Contacto</h3>
                <input placeholder='Nombre' />
                <input placeholder="Telefono movil" />
                <input placeholder='Correo electronico' />
                <textarea placeholder='Mensaje' ></textarea>
                <button>ENVIAR</button>
            </StyledForm>
        </>
    )
}

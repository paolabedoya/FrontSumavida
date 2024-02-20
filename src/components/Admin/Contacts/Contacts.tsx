import { useState, useEffect } from 'react'
import { StyledContacts } from './styles'
import axios from 'axios'
import type { Contact } from '../../../utils/types'
import moment from 'moment'

export const Contacts = () => {

    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = () => {
        axios.get('http://localhost:4040/api/contact')
            .then(res => {
                console.log("res: ", res.data)
                if (res.data.status === 'success') {
                    setContacts(res.data.contacts)
                } else {
                    alert("No se han podido obtener los contactos")
                }
            })
            .catch(err => {
                console.error(err)
                alert("Error al obtener los contactos")
            })
    }

    return (
        <StyledContacts>
            <h1>Contactos</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>{moment(contact.createdAt).fromNow()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </StyledContacts>
    )
}
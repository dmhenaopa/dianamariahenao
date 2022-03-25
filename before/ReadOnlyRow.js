import React from 'react';

export function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
    return (
        <tr>
            <td>{contact.id}</td>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.phone_number}</td>
            <td>{contact.email}</td>
            <td>{contact.company}</td>
            <td>{contact.subscription_id}</td>
            <td>
                <button 
                    type='button' 
                    onClick={(event) => handleEditClick(event, contact)}
                >Editar</button>
                <button
                    type='button'
                    onClick={() => handleDeleteClick(contact.id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}
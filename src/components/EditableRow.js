import React from 'react';

export function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <tr>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Id'
                    name='id'
                    value={editFormData.id}
                    onChange={handleEditFormChange}                    
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Nombre'
                    name='first_name'
                    value={editFormData.first_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Apellido'
                    name='last_name'
                    value={editFormData.last_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Teléfono'
                    name='phone_number'
                    value={editFormData.phone_number}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Correo'
                    name='email'
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Empresa'
                    name='company'
                    value={editFormData.company}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Id subscripción'
                    name='subscription_id'
                    value={editFormData.subscription_id}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type='submit'>Guardar</button>
                <button type='button' onClick={handleCancelClick}>Cancelar</button>
            </td>
        </tr>
    );
}
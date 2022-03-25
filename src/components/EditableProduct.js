import React from 'react';
import styles from '../App.css';

export function EditableProduct({ product, editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <div className='divProduct'>
            <div className={styles.divText}>
                <div className={styles.divLeftText}>
                    <h2 className={styles.h2Product}>
                        <input
                        className={styles.inputProductForm2}
                        type='text'
                        required='required'
                        placeholder='Nombre del producto'
                        name='product_name'
                        value={editFormData.product_name}
                        onChange={handleEditFormChange}
                    />
                    </h2>
                    <p><b>Id:</b>
                        <input
                            className={styles.inputProductForm1}
                            type='text'
                            required='required'
                            placeholder='id del producto'
                            name='product_id'
                            value={editFormData.product_id}
                            onChange={handleEditFormChange}
                        />
                    </p>
                    <p>
                        <textarea
                            className={styles.inputProductForm4}
                            type='text'
                            required='required'
                            placeholder='Descripción del producto'
                            name='description'
                            value={editFormData.description}
                            onChange={handleEditFormChange}
                        />
                    </p>
                </div>
                <p className={styles.pVersionProduct}><b>Versión</b><br/>
                    <input
                        className={styles.inputProductForm3}
                        type='text'
                        required='required'
                        placeholder='Control de versión'
                        name='version'
                        value={editFormData.version}
                        onChange={handleEditFormChange}
                    />
                </p>
            </div>
            <div className={styles.divButtons}>
                <button type='submit' className={styles.buttonUpdate}>Guardar</button>
                <button type='submit' className={styles.buttonDelete} onClick={handleCancelClick}>Cancelar</button>
            </div>
      </div>
    );
}

/*            <div className={styles.divButtons}>
                <button className={styles.buttonDownload}>Descargar</button>
                <button className={styles.buttonUpdate}>Actualizar</button>
                <button className={styles.buttonDelete}>Eliminar</button>
            </div> */
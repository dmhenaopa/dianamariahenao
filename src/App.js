import React, { Fragment, useState } from 'react';
import styles from './App.css';
import data from './mock.data.products.json';
import { ReadOnlyProduct } from './components/ReadOnlyProduct';
import { EditableProduct } from './components/EditableProduct';

function App() {
    const [products, setProducts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      product_id: '',
      product_name: '',
      description: '',
      version: '',
      /*className: ''*/
    });

    const [editFormData, setEditFormData] = useState({
      product_id: '',
      product_name: '',
      description: '',
      version: '',
      /*className: ''*/
    });

    const [editProductId, setEditProductId] = useState(null);

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newProduct = {
        product_id: addFormData.product_id,
        product_name: addFormData.product_name,
        description: addFormData.description,
        version: addFormData.version,
        /*className: addFormData.className*/
      };

      const newProducts = [...products, newProduct];
      setProducts(newProducts);
    };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedProduct = {
        product_id: editFormData.product_id,
        product_name: editFormData.product_name,
        description: editFormData.description,
        version: editFormData.version,
      }

      const newProducts = [...products];
      const index = products.findIndex((product)=> product.product_id === editProductId)
      newProducts[index] = editedProduct;
      setProducts(newProducts);
      setEditProductId(null);
    }

    const handleEditClick = (event, product) => {
      event.preventDefault();
      setEditProductId(product.product_id);

      const formValues = {
        product_id: product.product_id,
        product_name: product.product_name,
        description: product.description,
        version: product.version,
        /*className: product.className*/
      }

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditProductId(null);
    }

    const handleDeleteClick = (productId) => {
      const newProducts = [...products];

      const index = products.findIndex((product) => product.id === productId);
      newProducts.splice(index, 1);
      setProducts(newProducts);
    }

    return (
        <Fragment>
          <form onSubmit={handleEditFormSubmit}>
            {products.map((product) =>
              <Fragment>
                { editProductId === product.product_id ? (
                  <EditableProduct product={product} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                ) : (
                  <ReadOnlyProduct product={product} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                )}
              </Fragment>
            )}
          </form>
          <h2>Nuevo producto</h2>
            <form onSubmit={handleAddFormSubmit}>
              <input
                className={styles.inputProductForm1}
                type='text'
                required='required'
                placeholder='id del producto'
                name='product_id'
                onChange={handleAddFormChange}
              />
              <input
                className={styles.inputProductForm2}
                type='text'
                required='required'
                placeholder='Nombre del producto'
                name='product_name'
                onChange={handleAddFormChange}
              />
              <input
                className={styles.inputProductForm3}
                type='text'
                required='required'
                placeholder='Control de versión'
                name='version'
                onChange={handleAddFormChange}
              />
              <textarea
                className={styles.inputProductForm4}
                type='text'
                required='required'
                placeholder='Descripción del producto'
                name='description'
                onChange={handleAddFormChange}
              />
              <input type="file" id="fileUpload" />
              <button type='submit' className={styles.buttonNewProduct}>Añadir producto</button>
            </form>
        </Fragment>
      );
    }

export default App;
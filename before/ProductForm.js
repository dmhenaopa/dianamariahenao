import React from "react";
import styles from './../App.css';

export function ProductForm(props) {
  return (
    <form className="formProductForm">
      <input
        className={styles.inputProductForm1}
        type="text"
        placeholder="id del producto"
        name="productId"
      />
      <input
        className={styles.inputProductForm2}
        type="text"
        placeholder="Nombre del producto"
        name="productName"
      />
      <input
        className={styles.inputProductForm3}
        type="text"
        placeholder="Control de versión"
        name="version"
      />
      <input
        className={styles.inputProductForm4}
        type="text"
        placeholder="Descripción del producto"
        name="productDescription"
      />
      <button className="buttonAttachFile">Agregar archivo adjunto</button>
      <button className="buttonNewProduct">Crear producto</button>
      <button className="buttonCancelNewProduct">Cancelar</button>
    </form>
  );
}
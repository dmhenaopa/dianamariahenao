import React from "react";

function ProductForm(props) {
  return (
    <form className="formProductForm">
      <input
        className="inputProductForm"
        type="text"
        placeholder="id del producto"
        name="productId"
      />
      <input
        className="inputProductForm"
        type="text"
        placeholder="id del producto"
        name="productId"
      />
      <input
        className="inputProductForm"
        type="text"
        placeholder="id del producto"
        name="productId"
      />
      <input
        className="inputProductForm"
        type="text"
        placeholder="id del producto"
        name="productId"
      />
      <button className="buttonAttachFile">Agregar archivo adjunto</button>
      <button className="buttonNewProduct">Crear producto</button>
      <button className="buttonCancelNewProduct">Cancelar</button>
    </form>
  );
}
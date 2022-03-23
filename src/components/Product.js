import React, { Fragment } from "react";

export function Product(props) {
  return (
    <Fragment>
      <div className="divProduct">
        <h2 className="h2Product">{props.text}</h2>
        <div className="divButtons">
          <button className="buttonDownload">Descargar</button>
          <button className="buttonUpdate">Actualizar</button>
          <button className="buttonDelete">Eliminar</button>
        </div>
      </div>
    </Fragment>
  );
}
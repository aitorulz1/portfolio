import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import authContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";

import "./css/ByCategory.css";

import "./css/CategoryItems.css";

export default function CategoryItems({ porcategoria }) {
  const proyectosContext = useContext(proyectoContext);
  const { eliminarProyecto } = proyectosContext;

  const { autenticado } = useContext(authContext);

  const {
    name,
    category,
    begin,
    end,
    description,
    productPicture,
    user,
    id,
    skills,
  } = porcategoria;

  const onClickEliminar = (id) => {
    eliminarProyecto(id);
    console.log(id);
  };

  if (id === null) return;

  return (
    <div className="project-container">
      <div className="main-title">{name}</div>

      {autenticado ? (
        <div className="button-container-mern">
          <Link to={`/proyecto/editar/${id}`}>
            <div className="button-edit">
              <i className="fas fa-pen"></i>
            </div>
          </Link>

          <div
            type="button"
            className="button-delete"
            onClick={() => onClickEliminar([porcategoria.id])}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      ) : null}

      <div className="image-container">
        <img src={productPicture} />
      </div>

      <div className="slider-container-button">
        <Link to={`/proyecto/${id}`}>
          <div className="button-container-ver">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { Link } from "react-router-dom";

import "./css/CategoryItemsCol.css";

import authContext from "../../context/auth/authContext";

export default function CategoryItems({ porcategoria }) {
  const proyectosContext = useContext(proyectoContext);
  const { eliminarProyecto } = proyectosContext;

  const { autenticado } = useContext(authContext);

  const { name, category, begin, end, description, productPicture, user, id } =
    porcategoria;

  const onClickEliminar = (id) => {
    eliminarProyecto(id);
  };

  const shortDescr = description.slice(0, 70) + "...";

  const year = end.slice(0, 4);
  const month = end.slice(5, 7);
  const day = end.slice(8, 10);

  const date = `${day} · ${month} · ${year}`;

  if (id === null) return;

  return (
    <div className="project-container-regular">
      <div className="main-title-regular">{name}</div>

      {autenticado ? (
        <div className="edit-del-cont">
          <Link to={`/proyecto/editar/${id}`}>
            <div className="button-edit-regular">
              <i className="fas fa-pen"></i>
            </div>
          </Link>

          <div
            type="button"
            className="button-delete-regular"
            onClick={() => onClickEliminar([porcategoria.id])}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      ) : null}

      <div className="image-container">
        <img src={productPicture} />
      </div>

      <div className="end-date">{date}</div>

      <div className="main-descr-regular">{shortDescr}</div>

      <div className="slider-container-button">
        <div className="button-container-ver">
          <Link to={`/proyecto/${id}`}>
            <i class="fa fa-eye" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

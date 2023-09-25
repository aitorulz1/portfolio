import React, { useEffect, useContext, useState } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "../Proyectos/Proyecto";

import wpimg from "../../assets/categories/icon-wp.png";
import mernimg from "../../assets/categories/icon-mern.png";
import reactimg from "../../assets/categories/icon-react.png";

import allProjects from "../../data/projects.json";

import "./css/ListadoProyectos.css";

export default function ListadoProyectos() {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  const wp = allProjects.filter((el) => el.category === "web");
  const mern = allProjects.filter((el) => el.category === "mern");
  const react = allProjects.filter((el) => el.category === "react");

  useEffect(() => {
    obtenerProyectos();
  }, []);

  useEffect(() => {
    setCat(allProjects);
  }, [allProjects]);

  const [cat, setCat] = useState(allProjects);

  const wpb = (filtro) => {
    setCat(filtro);
  };

  if (!allProjects) return null;

  return (
    <div>
      <div className="button">
        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(wp)}>
            <img src={wpimg} className="cat-icon" />
          </button>
        </div>

        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(mern)}>
            <img src={mernimg} className="cat-icon" />
          </button>
        </div>

        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(react)}>
            <img src={reactimg} className="cat-icon" />
          </button>
        </div>
      </div>

      <ul>
        {cat.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
}

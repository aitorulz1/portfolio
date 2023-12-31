import React, { useState, useEffect, useContext } from "react";
import clienteAxios from "../../service/axios";
import { Link } from "react-router-dom";
import proyectos from "../../data/projects.json";

import { useParams } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

import "./css/ProyectoSelected.css";

import Stop from "../../assets/icons/main-stop-icon.png";

var history = require("browser-history");

export default function ProyectoSelected() {
  // para pasar los parametros
  const { proyecto } = useParams();

  const theOne = proyectos.filter((el) => el.id === proyecto);

  const [proyect, guardarProyect] = useState(theOne[0]);

  const [showvideo, setShowVideo] = useState(false);

  const showVideo = () => {
    setShowVideo(true);
  };

  const hideVideo = () => {
    setShowVideo(false);
  };

  const {
    name,
    productPicture,
    category,
    linkto,
    github,
    video,
    skill,
    description,
    end,
    begin,
  } = proyect;

  const modalVideo = `${video}?autoplay=1&showinfo=0&controls=0&rel=0&modestbranding=0&loop=1&fs=1`;

  if (proyect === null) return;

  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          <Link to={`/category/${category}`} className="back-to">
            <div className="arrow">
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            </div>
            <div className="back-txt">go back</div>
          </Link>

          <div className="single-container">
            <div className="title-single-container">
              {name} |{" "}
              <Link to={`/category/${category}`}>
                <span className="category">{category}</span>
              </Link>
            </div>

            <div className="image-single-container">
              {showvideo ? (
                <div className="video-container">
                  <iframe
                    id="video-modal"
                    src={modalVideo}
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                    allow="autoplay"
                  ></iframe>
                </div>
              ) : null}

              <img src={productPicture} />
            </div>

            <div className="date-container">
              <div className="date-begin">
                {begin ? begin.slice(0, 10) : null}
              </div>
              <div className="date-end">| {end ? end.slice(0, 10) : null}</div>
            </div>

            <div className="description-single-container">{description}</div>

            <div className="skills-container">
              <div className="skills">
                {skill ? skill.map((s) => s + " | ") : null}
              </div>
            </div>

            <div className="links-container">
              {linkto ? (
                <a href={linkto} target="_blank">
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
              ) : null}
              {video ? (
                <div className="youtube-link">
                  <a onClick={showVideo}>
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </a>
                </div>
              ) : null}
              <div>
                {showvideo ? (
                  <div className="quite-button">
                    <a onClick={hideVideo}>
                      <img className="close-icon" src={Stop} />
                    </a>
                  </div>
                ) : null}
              </div>
              {github ? (
                <div className="github-link">
                  <a href={github} target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}

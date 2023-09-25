import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriesData from "../../data/categories.json";

import Menu from "./Menu";
import "./css/AllCategories.css";
import Spinner from "../Spinner/Spinner";

export default function AllCategories({ abiertouno }) {
  const [categories, getCategories] = useState(categoriesData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categories) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="sidebar-block">
      <div className="main-burger-button"></div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {abiertouno ? (
              <div className="menu-container">
                {!categories
                  ? null
                  : categories.map((categoryx) => (
                      <Menu key={categoryx.id} categoryx={categoryx} />
                    ))}
                <div className="menu-items">
                  <Link to={"/proyectos"}>all</Link>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

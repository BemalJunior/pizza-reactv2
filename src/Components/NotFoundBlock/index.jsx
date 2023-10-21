import React from "react";

import style from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";

export const NotFoundBlock = () => {
  return (
    <Link to="/">
      <div className={style.root}>
        <h1>
          <span>😕</span>
          <br />
          Ничего не найдено
        </h1>
        <button className={style.button}>
          <p>На главную</p>
        </button>
      </div>
    </Link>
  );
};

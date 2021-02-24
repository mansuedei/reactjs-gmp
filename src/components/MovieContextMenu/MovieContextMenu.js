import React from "react";
import { DottedIcon } from '../../assets/icons/Dotted-Icon';

export const MovieContextMenu = () => {
  return (
    <div className="movie-context-menu">
      <div className="movie-context-menu__icon">
        <DottedIcon />
      </div>
      <div className="movie-context-menu__pop-up movie-context-menu__pop-up--hidden">
        <div className="movie-context-menu__close-icon">X</div>
        <div className="movie-context-menu__option">Edit</div>
        <div className="movie-context-menu__option">Delete</div>
      </div>
    </div>
  )
}
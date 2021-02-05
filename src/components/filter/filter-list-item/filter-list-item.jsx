import React from "react";

const FilmListItem = ({name, value, label}) =>{
  const id = `${name}-${value}`;

  return (
    <li className="custom-checkbox">
      <input className="visually-hidden" type="checkbox" name={name} id={id} />
      <label htmlFor={id}>
        <img className="custom-checkbox__icon" src={`./img/icon-${value}.svg`} alt=""/>
        {label}
      </label>
    </li>
  );
};

export default FilmListItem;

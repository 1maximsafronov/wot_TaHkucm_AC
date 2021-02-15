import React, {Fragment} from "react";
import PropTypes from "prop-types";
import "./equipment.scss";

const Equipment = ({name, type}) =>{
  return (
    <div className={`equipment equipment--${name}`}>
      {name === `empty` ? `` : (
        <Fragment>
          <p className="equipment__preview">
            <img className="equipment__picture" src={`./img/${type}/${name}.png`} alt="" />
          </p>
          <div className="equipment__desc">
            Описание
          </div>
        </Fragment>
      )}
    </div>
  );
};

Equipment.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

Equipment.defaultProps = {
  name: `empty`,
  type: ``
};

export default Equipment;

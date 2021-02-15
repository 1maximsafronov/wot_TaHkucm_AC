import React from "react";
import PropTypes from "prop-types";
import Equipment from "../equipment";

const EquipmentList = ({type, list}) =>{
  return (
    <ul className="tank-item__equipment-list">
      {list.map((item, index) =>{
        return (
          <li key={`${item}-${index}`} className="tank-item__equipment-item">
            <Equipment
              name={item}
              type={type}
            />
          </li>
        );
      })}
    </ul>
  );
};

EquipmentList.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array
};

export default EquipmentList;

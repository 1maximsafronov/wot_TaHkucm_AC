import React from "react";
import EquipmentList from "../equipment/equipment-list/equipment-list";
import PropTypes from "prop-types";

const TankItem = ({tank}) =>{

  const {
    nation,
    type,
    lvl,
    name,
    equipment,
    directives,
    specialEquipment
  } = tank;

  return (
    <li className="tank-list__item tank-item">
      <div className="tank-item__nation">
        {nation}
      </div>
      <div className="tank-item__type">
        {type}
      </div>
      <div className="tank-item__lvl">
        {lvl}
      </div>
      <p className="tank-item__name">
        {name}
      </p>
      <div className="tank-item__equipment">
        {equipment.map((item, index)=>{
          return (
            <EquipmentList
              key={`standart-list-${index}`}
              type="standard"
              list={item}
            />
          );
        })}

      </div>
      <div className="tank-item__directive">
        <EquipmentList
          type="directives"
          list={directives}
        />
      </div>
      <div className="tank-item__special-equipment">
        {specialEquipment.map((item, index) =>{
          return (
            <EquipmentList
              key={`special-list-${index}`}
              type="special"
              list={item}
            />
          );
        })}
      </div>
    </li>
  );
};

TankItem.propTypes = {
  tank: PropTypes.object
};

export default TankItem;

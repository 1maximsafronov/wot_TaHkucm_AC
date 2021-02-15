import React from "react";
import TankItem from "../tank-item/tank-item";
import {tankMockData} from "../../mock/tank";

const TanksList = () => {
  return (
    <ul className="tank-list">
      <TankItem tank={tankMockData}/>
      <TankItem tank={tankMockData} />
      <TankItem tank={tankMockData} />
    </ul>
  );
};

export default TanksList;

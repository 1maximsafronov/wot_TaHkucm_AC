import React from "react";
import FilterSection from "./filter-section/filter-section";
import {listData} from "../../const";

const Filter = () => {

  return (
    <section className="filter container">
      <h2 className="visually-hidden">Фильтр</h2>
      <form action="" method="get" className="filter__form">
        <FilterSection title="Нация" list={listData.nation}/>
        <FilterSection title="Тип" list={listData.type}/>
        <FilterSection title="Уровень" list={listData.lvl}/>
        <FilterSection title="Дополнительно" list={listData.aditinal} />
      </form>
    </section>
  );
};

export default Filter;

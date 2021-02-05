import React from "react";
import FilterList from "../filter-list/filter-list";

const FilterSection = ({title, list}) => {
  return (
    <section className="filter__section">
      <h3 className="filter__title">{title}</h3>
      <FilterList list={list}/>
    </section>
  );
};

export default FilterSection;

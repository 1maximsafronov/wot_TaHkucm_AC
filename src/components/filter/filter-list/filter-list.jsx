import React from "react";
import PropTypes from "prop-types";
import FilterListItem from "../filter-list-item/filter-list-item";

const FilterList = ({list}) =>{
  return (
    <ul className="filter__list">
      {list.map((item, i)=>{
        return (
          <FilterListItem
            key={`${item.value}-${i}`}
            name={item.name}
            value={item.value}
            label={item.label}
          />
        );
      })}
    </ul>
  );
};

FilterList.propTypes = {
  list: PropTypes.array
};
export default FilterList;

import React from 'react'
import SearchButton from "./SearchButton";
import CompareButton from "./CompareButton";
import SelectFilter from "./SelectFilter";

export default function Header(props) {
  return (
	  <div className="container">
    <h1> TITLE GO HERE</h1>
          <div className="nav-container top-fixed">
            {props.showCompare ? (
              <SearchButton compare={props.compareItemsFlag} />
            ) : (
              <CompareButton compare={props.compareItemsFlag} />
            )}
          </div>
          <div className="filter-container top-fixed">
            {props.showCompare ? null : (
              <SelectFilter
                filterItems={props.filterItems}
                handleTypeChange={props.handleTypeChange}
              />
            )}
            </div>
      </div>
  )
}

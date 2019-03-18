import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => {
    const filters = ["All", "Active", "Completed"];
    return (
        <div>
            <span>Show:</span>
            {filters.map((filter, i) => (
                <FilterLink
                    key={i}
                    filter={VisibilityFilters[`SHOW_${filter.toUpperCase()}`]}
                >
                    {filter}
                </FilterLink>
            ))}
        </div>
    );
};

export default Footer;

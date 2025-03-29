import { memo } from "react";

const Search = (props) => {
    const {onChange} = props;
    console.log('Search Render');

    return (
        <input type="text" placeholder="Search Users..." onChange={(e) => onChange(e.target.value) } />
    )
}

export default memo(Search);
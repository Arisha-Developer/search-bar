import { Box } from '@mui/system';
import React, { useState } from 'react';

function SearchBar(props) {
    const [searchList, onSearch] = props
    const [selectedList, setselectedList] = useState("")
    let SearchVal = (e) => {
        onSearch(selectedList, e)
    }
    return (
        <Box>
            <input type="text"
                placeholder='Search'
                onChange={(e) => SearchVal(e.target.value)} />
            <div>
                <select name="" id="" onChange={(e)=>setselectedList(e.target.value)}></select>
                <option value="">Select</option>
                {searchList.map((x,i)=>(
                    <option  key={i} value={x.key}>{x.displayName}</option>
                ))}
            </div>
        </Box>
    );
}

export default SearchBar;

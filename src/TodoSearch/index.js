import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react';
function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  return (
      <input value={searchValue} type="text" placeholder="Search..."  onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
  );
}  

export { TodoSearch };
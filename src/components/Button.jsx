import React from 'react';

const Button = ({houseName , selectedFilter, setSelectedFilter, setSearchText}) => {
  return (
    <button className={`${selectedFilter === houseName ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} 
    onClick={()=> {
        setSearchText('');
        setSelectedFilter(houseName);
    }}>{houseName}</button>
  );
}

export default Button;
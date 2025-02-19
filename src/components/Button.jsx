import React from 'react';

const Button = ({houseName , selectedFilter, setSelectedFilter}) => {
  return (
    <button className={`${selectedFilter === houseName ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter(houseName)}>{houseName}</button>
  );
}

export default Button;
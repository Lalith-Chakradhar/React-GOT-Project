import React from 'react';

const Header = ({searchText, setSearchText, setSelectedFilter}) => {
  return (
    <header className=' h-36 bg-blue-500 flex flex-col items-center justify-evenly mb-6'>
        <h1 className='text-white text-2xl font-bold'>👑 Peoples of GOT</h1>
        <input type='text' className='w-64 p-2 text-sm outline-none rounded-sm' value={searchText} placeholder='Search the people of GOT' onChange={(e) => {setSearchText(e.target.value)}} onFocus={()=> setSelectedFilter('')}/>
    </header>
  );
}

export default Header;
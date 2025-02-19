import React from 'react';
import Button from './Button';
import got from '../../data';


const AllButtons = ({selectedFilter, setSelectedFilter, setSearchText}) => {
  return (
    <section className='flex flex-wrap gap-2 justify-center mb-16'>
        {got.houses.map((eachHouse)=> <Button houseName={eachHouse.name} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} setSearchText={setSearchText}/>)}
    </section>
  )
}

export default AllButtons
import React from 'react';
import Card from './Card';

const AllCards = ({data}) => {
  return (
    <section className='flex flex-wrap gap-10 w-3/4 mx-auto justify-center'>
        {(data) && (
            data.map((gotCharacter,index)=>{
            return <Card key={index} gotCharacter = {gotCharacter}/>
            })
        )}
    </section>
  )
}

export default AllCards
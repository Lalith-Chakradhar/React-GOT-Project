import React from 'react';


const Card = ({gotCharacter}) => {

    function navigateToExternalLink(){

        window.open(`${gotCharacter.wikiLink}`, "_blank", "noopener,noreferrer");
    }

  return (
    <>
    <div className='container p-4 border rounded-xl w-96 text-center flex flex-col justify-around shadow-2xl'>
        <div className='flex items-center gap-4'>
            <div><img src={gotCharacter.image} className='border border-blue-500 rounded-full'/></div>
            <div className='text-xl font-semibold'>{gotCharacter.name}</div>
        </div>
        <p className='my-4 text-sm'>{gotCharacter.description}</p>
        <div><button onClick={navigateToExternalLink} className='text-blue-700 bg-blue-100 rounded-lg w-full py-2'>Learn More!</button></div>
    </div>
    </>
  )
}

export default Card;
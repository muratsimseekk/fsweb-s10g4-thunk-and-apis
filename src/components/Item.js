import React from 'react'


function Item({ data }) {
  return (
    <div className='shadow-md bg-white text-center'>
      <img
      className='w-full object-cover' src={data}></img>
    </div>
  )
}

export default Item
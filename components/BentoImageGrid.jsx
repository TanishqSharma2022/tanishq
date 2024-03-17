import React from 'react'

const BentoImageGrid = () => {
  return (
    <div className='mt-12 h-fit'>
      <div className='grid grid-cols-4 gap-2 h-fit w-[85%] mx-auto'>
          <img   src={`/mine/1.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover `} />
          <img   src={`/mine/2.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover `} />
          <img   src={`/mine/9.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover col-span-2`} />
          <img   src={`/mine/4.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover`} />
          <img   src={`/mine/5.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover col-span-2`} />
          <img   src={`/mine/10.jpeg`} alt='random' className={`rounded-xl w-full shadow-lg h-48 object-center object-cover`} />
      </div>
    </div>
  )
}

export default BentoImageGrid

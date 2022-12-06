import React from 'react'
import Image from 'next/image'
import player from '../public/player.png'
import placeholder from '../public/placeholder.png'

const NewsList = () => {
  return (
    <div className='lg:ml-64 flex justify-center lg:mr-4 mt-4'>
        <div className='news w-full '>
            <div className='flex bg-white w-full'>
                <div className='flex'>
                <Image src={placeholder} width={300} alt={placeholder}></Image>
                </div>
                <div>
                <h1 className='font-bold p-2'>
                    Title 1
                </h1>
                <p className='p-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NewsList
import React from 'react'
import Image from 'next/image'
import player from '../public/player.png'

const MatchesList = () => {
  return (
    <div className='lg:ml-64 flex justify-center lg:mr-4'>
        <div className='matches'>
            <div className='flex p-6 justify-between bg-white w-[1000px]'>
                <div className='flex'>
                <Image src={player} width={50} alt={player}></Image>
                <h1>Team 1</h1>
                </div>
                <h2 className='font-bold'>result1</h2>
                <h3>datetime</h3>
                <h2 className='font-bold'>result2</h2>
                <div className='flex'>
                <h1>Team 1</h1>
                <Image src={player} width={50} alt={player}></Image>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MatchesList
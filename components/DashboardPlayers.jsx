import React from 'react'
import player from '../public/player.png'
import Image from 'next/image'

const DashboardPlayers = () => {

  return (
    <div className='mt-8 ml-4 p-6'>
        <div className='justify-center'>
          <h1 className='py-3 flex justify-center'>ONES TO WATCH</h1>
          <div className='py-2 justify-center flex'>
          <div className=" bg-white w-60">
                        <div className='flex justify-center'>
                        <Image src={player} width={140} alt="player"></Image>
                        </div>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600 flex justify-center">
                                PLAYER NAME
                            </h4>
                            <p className="mb-2 leading-normal flex justify-center">
                              Player average
                            </p>
                        </div>
                    </div>
          </div>
          
        </div>
    </div>
  )
}

export default DashboardPlayers
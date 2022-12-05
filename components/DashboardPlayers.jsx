import React from 'react'
import player from '../public/player.png'
import Image from 'next/image'

const DashboardPlayers = () => {

  return (
    <div className='mt-8 ml-12 flex justify-center'>
        <div>
          <h1 className='py-3 flex justify-center'>ONES TO WATCH</h1>
          <div className='py-2'>
          <div className="rounded-lg shadow-md lg:max-w-sm bg-white w-60">
                        <div className='flex justify-center'>
                        <Image src={player} width={140}></Image>
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


          <div className='py-2'>
          <div className="rounded-lg shadow-md lg:max-w-sm bg-white w-60">
                        <div className='flex justify-center'>
                        <Image src={player} width={140}></Image>
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
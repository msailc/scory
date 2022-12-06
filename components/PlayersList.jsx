import React from 'react'
import Image from 'next/image'
import nbalogo from '../public/nbalogo.png'

const PlayersList = () => {
  return (
    <div className='lg:ml-64 lg:mr-4 mt-8'>
    <div className="grid gap-2 lg:grid-cols-6">
                <div className=" bg-white  flex justify-center" >
                    <div className="lg:p-8">
                    <Image src={nbalogo} width={125}></Image>
                        <h4 className="text-xl font-semibold text-blue-600 flex justify-center mt-4">
                         Morant
                        </h4>
                        <h2 className="mb-2 leading-normal flex justify-center">
                        Ja
                        </h2>
                        <h3 className='flex justify-center'>
                            Memphis Grizzlies
                        </h3>
                        <h3 className='flex justify-center py-2'>
                            Point Guard
                        </h3>
                        <h2 className='flex justify-center'>
                            6'3"
                        </h2>
                        <h2 className='flex justify-center'>
                            175 lbs
                        </h2>
                        <h1 className='flex justify-center py-4 font-bold'>
                            Average
                        </h1>
                    </div>
                </div>
                </div>
                </div>
  )
}

export default PlayersList
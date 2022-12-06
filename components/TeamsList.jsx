import React from 'react'
import Image from 'next/image'
import nbalogo from '../public/nbalogo.png'

const TeamsList = () => {

    return (
        <div className='lg:ml-64 lg:mr-4 mt-8'>
            <div className="grid gap-2 lg:grid-cols-6">
                        <div className=" bg-white  flex justify-center" >
                            <div className="p-8">
                            <Image src={nbalogo} width={125} alt={nbalogo}></Image>
                                <h4 className="text-xl font-semibold text-blue-600 flex justify-center mt-4">
                                 Thunder
                                </h4>
                                <h2 className="mb-2 leading-normal flex justify-center">
                                Oklahoma City
                                </h2>
                                <h3 className='flex justify-center'>
                                    Arena name
                                </h3>
                            </div>
                        </div>
                </div>
        </div>
      )
    }
    
export default TeamsList
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import HotBids from './HotBids'


function MiddlePart() {
    return (
            <div className=' dark:bg-gray-900 min-h-screen flex-1  px-6 p-6 '>
                {/* Searchbar */}
                <div className=' bg-gray-100 dark:bg-gray-700 flex items-center px-5 text-gray-400 rounded-md mb-5  '>
                    <FontAwesomeIcon icon={faSearch} className='text-[20px]' />
                    <input placeholder='Search Artwork' className='h-full px-2 py-2  text-[15px]  bg-gray-100 dark:bg-gray-700 outline-none  ' type="text" />
                </div>
                {/* Cover */}
                <div>
                    <div className=' py-4 px-4 rounded-md transition-all bg-cover object-cover '>
                        <h1 className=' text-[24px] font-semibold text-white mt-2 '>Create your <span><br /></span> Own NFT</h1>
                        <div className='flex items-center mt-6 mb-2'>
                            <button className='bg-gray-100 text-[12px] cursor-pointer transition-all hover:text-gray-100 hover:bg-gray-800  rounded-lg font-bold px-2 py-1'>Start Sale</button>
                            <p className='text-[13px] text-white ml-2 cursor-pointer transition-all hover:text-gray-200 '>Learn more</p>
                        </div>
                    </div>
                </div>

                {/* Hot Bids */}
                <HotBids />
                
            </div>   
    )
}

export default MiddlePart

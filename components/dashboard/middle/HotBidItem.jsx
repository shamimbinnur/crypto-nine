import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function HotBidItem({item}) {
    
    return (
        <div className=' bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-md text-white p-2 '>
            
            <div className="rounded-md relative h-[200px] overflow-hidden" >
                <div className=' absolute h-full w-full ' >
                    <div className='absolute h-full w-full '>
                        < img className=' w-full h-full object-cover  '  src={item.image} alt="" />
                    </div>
                </div>
                
                <div className=' p-3 ' >
                    <div className=' flex justify-end  '>
                            <div className=' w-10 h-10 backdrop-blur-md bg-white/30 p-2 rounded-md ' >
                                <FontAwesomeIcon className='text-white text-[24px] cursor-pointer transition-all hover:text-pink-600 hover:scale-[1.2] ' icon={faHeart} />
                            </div>
                    </div>

                    <div className=' rounded-md backdrop-blur-md bg-white/30 p-3 mt-16 flex justify-between '>
                        <div>
                            <h1 className='text-[16px] font-bold cursor-pointer transition-all hover:text-customGray '  >{item.name}</h1>
                            <h2 className='text-[12px]'>Current Bid <span className=' text-customGray font-bold ' >4,05 ETH</span></h2>
                        </div>
                        <div className=' flex relative items-center ' >
                            <div className='bg-red-800 absolute right-10  w-8 h-8 rounded-full overflow-hidden ' >
                                <img className=' object-cover w-full h-full ' src="/images/profile1.jpg " alt="" />
                            </div>

                            <div className='bg-green-500 absolute right-5  w-8 h-8 rounded-full overflow-hidden ' >
                                <img className=' object-cover w-full h-full ' src="/images/profile2.jpg " alt="" />
                            </div>

                            <div className='bg-red-500 absolute right-0  w-8 h-8 rounded-full overflow-hidden ' >
                                <img className=' object-cover w-full h-full ' src="/images/profile3.jpg " alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            <div className=' flex justify-between py-3 '>
                <div className=' text-[12px] ' >
                    <p className=' text-gray-800 dark:text-gray-400 ' >Artwork by <span className=' text-customGray font-bold dark:text-white  '> Romans Albania </span></p>
                </div>
                <div className=' text-[12px] ' >
                    <p className=' text-customGray dark:text-white  font-bold ' >82 <span className=' text-gray-800 font-normal ' > Bids</span> </p>
                </div>
            </div>

        </div>
    )
}

export default HotBidItem

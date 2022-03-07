import React from 'react'

function TopCreator({item, index}) {
    return (
        <div className=' gird grid-cols-1 mt-4 '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center ' >
                    <p className=' text-gray-700 font-bold text-[16px] mr-3 dark:text-white ' >{index}.</p>
                    <div className='w-10 h-10 overflow-hidden rounded-full mr-2 ' >
                        <img src={item.image} className='w-full h-full object-cover'  alt="" />
                    </div>
                    <div className=' flex flex-col ml-2 '>
                        <h1 className=' font-bold text-gray-700 text-[16px] cursor-pointer transition-all hover:text-gray-900 dark:text-white ' >Sakaw_3212</h1>
                        <p className=' text-gray-500 text-[14px] ' >@skw11</p>
                    </div>
                </div>

                <div>
                    <button className=' w-16 h-7 p-1 cursor-pointer transition-all hover:bg-gray-900 bg-customGray text-[12px] text-white rounded-md ' >Follow</button>
                </div>
            </div>
        </div>

    )
}

export default TopCreator

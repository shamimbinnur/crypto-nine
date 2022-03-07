import React from 'react'

function RecentlyAddedItem({item}) {
    return (
            <div className=' flex ' >
                <div className=' w-14 h-14 rounded-md overflow-hidden mr-3' >
                    <img src={item.image} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='flex items-center justify-between min-w-[280px] '>
                    <div>
                        <h1 className=' text-[16px] font-bold text-gray-700 dark:text-white cursor-pointer transition-all hover:text-gray-900 ' >Propw</h1>
                        <p className=' text-[14px] text-gray-400 ' >@sawal_24</p>
                    </div>
                    <div>
                        <p className='text-[14px] text-gray-400 '>Sat, 27 Jun</p>
                    </div>
                </div>
            </div>
    )
}

export default RecentlyAddedItem

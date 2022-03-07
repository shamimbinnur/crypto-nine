import React from 'react'
import HotBidItem from './HotBidItem'

function HotBids() {

    const items = [
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home'
        },
        {
            image: '/images/photo2.jpg',
            name: 'Kids Playground '
        },
        {
            image: '/images/photo3.jpg',
            name: 'Beauty of nature '
        },
        {
            image: '/images/photo2.jpg',
            name: 'Kids Playground '
        },
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home'
        },
        {
            image: '/images/photo3.jpg',
            name: 'Beauty of nature '
        },
        {
            image: '/images/photo2.jpg',
            name: 'Kids Playground '
        },
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home'
        },
        {
            image: '/images/photo3.jpg',
            name: 'Beauty of nature '
        },


    ]

    return (
        <div>
            <div className=' flex justify-between items-center py-6 '>
                <div>
                    <h1 className=' text-[22px] font-bold text-gray-700 dark:text-white '>Hot Bids</h1>
                </div>
                <div >
                    <ul className=' flex items-center text-gray-500 dark:text-white '>
                        
                        <li className=' border-customGray border-b-2  text-customGray font-bold text-[14px] mr-2  cursor-pointer transition-all hover:font-bold hover:text-customGray ' >Art</li>
                        <li className=' text-[14px] mr-2  cursor-pointer transition-all hover:font-bold hover:text-customGray ' >Music</li>
                        <li className=' text-[14px] mr-2  cursor-pointer transition-all hover:font-bold hover:text-customGray ' >Sport</li>
                        <li className=' text-[14px] mr-2  cursor-pointer transition-all hover:font-bold hover:text-customGray ' >Utility</li>
                    </ul>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 max-h-[600px] overflow-y-auto px-2 gap-5'>
                {
                    items.map((item)=> (
                        <HotBidItem key={item.image} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default HotBids

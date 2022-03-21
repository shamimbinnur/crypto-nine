import React from 'react'
import TopCreator from './TopCreator'

function TopCreators({darkMode}) {

    const items = [
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home',
            id: 1
        },
        {
            image: '/images/profile2.jpg',
            name: 'Kids Playground ',
            id: 2
        },
        {
            image: '/images/profile3.jpg',
            name: 'Beauty of nature ',
            id: 3
        },
        {
            image: '/images/profile2.jpg',
            name: 'Kids Playground ',
            id: 4
        },


    ]

    return (
        <div className={darkMode}>
            <h1 className='text[20px] font-bold text-gray-800  mt-8 dark:text-white ' >Top Creators</h1>
            <div className=' max-h-[250px] overflow-y-auto px-3 '>
                {
                    items.map((item, index) => (
                        <TopCreator key={item.id} item={item} index={index+1} /> 
                    ))
                }
            </div>
        </div>
    )
}

export default TopCreators

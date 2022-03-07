import React from 'react'
import TopCreator from './TopCreator'

function TopCreators({darkMode}) {

    const items = [
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home'
        },
        {
            image: '/images/profile2.jpg',
            name: 'Kids Playground '
        },
        {
            image: '/images/profile3.jpg',
            name: 'Beauty of nature '
        },
        {
            image: '/images/profile2.jpg',
            name: 'Kids Playground '
        },


    ]

    return (
        <div className={darkMode}>
            <h1 className='text[20px] font-bold text-gray-800  mt-8 dark:text-white ' >Top Creators</h1>
            <div className=' max-h-[250px] overflow-y-auto px-3 '>
                {
                    items.map((item, index) => (
                        <TopCreator key={item.image} item={item} index={index+1} /> 
                    ))
                }
            </div>
        </div>
    )
}

export default TopCreators

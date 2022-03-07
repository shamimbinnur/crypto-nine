import React from 'react'
import RecentlyAddedItem from './RecentlyAddedItem'

export default function RecentlyAddedItems() {

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


    ]
    

    return (
        <>
            {
                items.map((item) => (
                    <RecentlyAddedItem key={item.image} item={item} />
                ) )   
            }  
        </>
    )
}

import React from 'react'
import RecentlyAddedItem from './RecentlyAddedItem'

export default function RecentlyAddedItems() {

    const items = [
        {
            image: '/images/photo1.jpg',
            name: 'Thunder Home',
            id: 1,
        },
        {
            image: '/images/photo2.jpg',
            name: 'Kids Playground ',
            id: 2,
        },
        {
            image: '/images/photo3.jpg',
            name: 'Beauty of nature ',
            id: 3
        },


    ]
    

    return (
        <>
            {
                items.map((item) => (
                    <RecentlyAddedItem key={item.id} item={item} />
                ) )   
            }  
        </>
    )
}

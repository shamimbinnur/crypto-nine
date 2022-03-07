import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faChartLine, faLayerGroup, faWallet, faClock, faWrench, faCoins, faTimes  } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGratipay } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function ToggleMenu({showMenu, toggleMenu}) {

    console.log(showMenu)

    return (
        <div className={'bg-white dark:bg-gray-900 min-w-full py-5 min-h-screen absolute z-[1000] top-0 transition-all ' + showMenu   }>
            {/* Branding */}
            <div className=' flex justify-end ' >
                <div onClick={toggleMenu} className='flex p-3  bg-gray-300 mr-4 cursor-pointer transition-all hover:text-white hover:bg-gray-700 text-gray-700 '>
                    <FontAwesomeIcon className=' text-[25px] ' icon={faTimes}  />
                </div>
            </div>
            {/* market place */}
            <div className='flex flex-col '>
                <h1 className=' text-[12px] font-bold text-customGray mb-3 pl-8 uppercase ' >Marketplace</h1>
                <div className=' flex items-center transition-all border-l-customGray border-opacity-100 text-gray-500   hover:text-gray-800  dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2  '>
                    <FontAwesomeIcon icon={faHotel} className=' text-[18px] mr-3 text-customGray dark:text-white  ' />
                    <h1 className=' text-[15px] font-semibold ' >Market</h1>
                </div>

                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white   cursor-pointer  border-l-4 pl-8 mb-2 py-2  '>
                    <FontAwesomeIcon icon={faChartLine} className=' text-[18px] mr-3 ' />
                    <h1 className=' text-[15px]  ' >Active Bid</h1>
                </div>
                
                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2'>
                    <FontAwesomeIcon icon={faGratipay} className=' text-[18px] mr-3   ' />
                    <h1 className=' text-[15px] ' >Saved</h1>
                </div>
            </div>



            {/* Account  */}
            <div className='flex flex-col mt-8'>
                <h1 className=' text-[12px] font-bold text-customGray mb-3 pl-8 uppercase ' >Account</h1>
                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2'>
                    <FontAwesomeIcon icon={faLayerGroup} className=' text-[18px] mr-3   ' />
                    <h1 className=' text-[15px] ' >My Collection</h1>
                </div>

                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2'>
                    <FontAwesomeIcon icon={faWallet} className=' text-[18px] mr-3   ' />
                    <h1 className=' text-[15px] ' >Wallet</h1>
                </div>

                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2'>
                    <FontAwesomeIcon icon={faClock} className=' text-[18px] mr-3   ' />
                    <h1 className=' text-[15px] ' >History</h1>
                </div>

                <div className=' flex items-center transition-all border-l-customGray border-opacity-0 text-gray-500  hover:text-gray-800 dark:hover:text-white  cursor-pointer border-l-4 pl-8 mb-2 py-2'>
                    <FontAwesomeIcon icon={faWrench} className=' text-[18px] mr-3   ' />
                    <h1 className=' text-[15px] ' >Settings</h1>
                </div>
            </div>

        </div>
    )
}

export default ToggleMenu

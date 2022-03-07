import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowDown, faMoon, faCaretDown, faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import RecentlyAddedItems from './RecentlyAddedItems'
import TopCreators from './TopCreators'
import ToggleMenu from './ToggleMenu'

function RightPart({darkMode, toggle, toggleMenu, showMenu}) {
    return (
            <div className='bg-slate-100 dark:bg-gray-700  flex flex-col p-4 min-h-screen'>

                {/* Username */}
                <div className=' flex h-10 items-center justify-between min-w-[250px]  ' >
                    <div className=' flex rounded-full mr-6 justify-center items-center w-8 h-8 border-[2px] border-gray-400  ' >
                        <div className=' w-1 h-1 rounded-full bg-pink-700  ' ></div>
                        <FontAwesomeIcon className=' text-[16px] text-gray-800 dark:text-white  ' icon={faBell} />
                    </div>

                    <div className=' flex items-center flex-1 ' >
                        <div className='w-9 h-9 rounded-full mr-2 overflow-hidden bg-pink-700'>
                            <img src="images/profile2.jpg " className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className=' mr-2' >
                            <h3 className='text-[14px] font-bold text-gray-800 dark:text-white ' >Daniel#554</h3>
                        </div>
                        <div className='' >
                            <FontAwesomeIcon className=' text-[20px] cursor-pointer dark:text-white ' icon={faCaretDown} />
                        </div>
                    </div>
                    <div className=' flex items-center ' >
                        <div className=' dark:bg-gray-400 bg-white w-8 h-8 justify-center flex items-center rounded-full' onClick={toggle} >
                            {
                                darkMode =='dark' ? <FontAwesomeIcon className=' text-[20px] text-yellow-400 cursor-pointer  ' icon={faSun}  /> : <FontAwesomeIcon className=' text-[20px] text-yellow-400 cursor-pointer  ' icon={faMoon}  />
                            }
                        </div>
                        <div className=' w-8 h-8 ml-3 rounded-md flex md:hidden bg-white hover:bg-gray-800 transition-all    dark:bg-slate-800 justify-center items-center ' >
                            <FontAwesomeIcon className='text-[22px] cursor-pointer text-gray-700 dark:text-white  transition-all hover:text-white  ' icon={faBars} onClick={toggleMenu} />
                        </div>
                        
                    </div>
                </div>

                
                <div className=' flex justify-between items-center mt-10 ' >
                    <div>
                        <h1 className=' text-[15px] text-gray-800 font-bold dark:text-white ' >Recently Added</h1>
                    </div>
                    <div>
                        <p className=' text-[14px] text-gray-600 dark:text-white ' >See All</p>
                    </div>
                </div>

                <div className='flex flex-col mt-6 bg-white dark:bg-gray-800 p-2 rounded-md ' >
                    <div className=' w-full h-[100px] rounded-md overflow-hidden ' >
                        <img src="/images/photo1.jpg " className=' w-full h-full object-cover   ' alt="" />
                    </div>
                    <div className=' flex justify-between mt-3 ' >
                        <div>
                            <h1 className=' text-[15px] font-bold text-gray-700 dark:text-white ' > Pagoda </h1>
                        </div>
                        <div>
                            <p className=' text-[14px] text-gray-400 ' >Sat, 27 Jun</p>
                        </div>
                    </div>
                </div>

                <div className=' grid mt-8 gap-2 grid-cols-1 max-h-[200px] overflow-y-auto px-3 ' >

                    <RecentlyAddedItems/>

                </div>

                <div>
                    <TopCreators/>
                </div>
                
                <div className=' flex  justify-center mt-6  '>
                    <h2 className=' text-[12px]  hidden md:block ' >Copyright Crypto Nine</h2>
                </div>
    
            </div>
    )
}

export default RightPart

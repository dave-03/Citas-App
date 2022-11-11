import React from 'react'

function Header() {
  return (
    <div>
        <nav className='w-screen'>
            <div className='w-screen  bg-sky-500 shadow-md' >
               
                <ul className='relative flex h-16 items-center justify-evenly '>
                <span className='m-4 font-extrabold text-xl'>CITAS APP</span>
                    <li className='text-white m-4 p-2 hover:bg-sky-300 hover: rounded'>
                        <a href='/#'>Home</a>
                    </li>
                    <li className='text-white m-4 p-2 hover:bg-sky-300 hover: rounded'>
                        <a href='/#'>Log In</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
   </div>
  )
}

export default Header
import { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
function Navbar() {
  const[nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl text-[#00df9a]'>React.</h1>
        
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Sobre</li>
          <li className='p-4'>Contato</li>
          
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
           {!nav ? <XIcon className='w-5'/> : <MenuIcon className='w-5' />}
          
        </div>
        
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 ease-in-out duration-700' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl text-[#00df9a] m-4'>React.</h1>
          <ul className='pt-12 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Sobre nós</li>
            <li className='p-4 border-b border-gray-600'>Contato</li>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Home</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
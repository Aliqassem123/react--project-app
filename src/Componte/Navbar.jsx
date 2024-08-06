
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    
        <nav  className='bg-slate-800 shadow-md w-full py-4'>
            <div className='container flex item-center'>
                <div className='flex justify-between  w-full  px-3'>
                      <a  className='text-white text-2xl' href="/home">START FRAMEWORK</a>
                 </div>
                 <div>
                 <ul className='flex justify-between gap-5'>
            
                <li><NavLink to={'/about'}  className='text-white text-xl mx-4'>About</NavLink></li>
                <li><NavLink to={'/portfolio'}  className='text-white text-xl mx-4'>Portfolio</NavLink></li>
                <li><NavLink to={'/contact'}  className='text-white text-xl mx-4'>Contact</NavLink></li>
            </ul>
               </div>
            </div>
           
        </nav>
    
  )
}

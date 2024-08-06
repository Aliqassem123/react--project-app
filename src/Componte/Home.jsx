
import person from '../assets/person.png'

export default function Home() {
  return (
   <div className='bg-emerald-400 w-full p-0 m-0 '>
     <div className='  mx-0 w-full flex justify-center items-center flex-col text-white'>
        <img className='m-auto' src={person} alt="" />
        <h1 className='text-6xl'>START FRAMEWORK</h1>

        <div className='star-bar'>
            <i className="fa-solid fa-star star"></i>
       </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      
    </div>
   </div>
  )
}









import {arrData} from './data.js'



export default function Portfolio() {

  return (
    <div className=' w-full p-0 m-0 '>
    <div className='  mx-0 py-20 w-full flex justify-center items-center flex-col '>
     
       <h1 className='text-6xl '>PORTFOLIO COMPONENT</h1>

       <div className='star-bar before:bg-gray-950 after:bg-gray-950 '>
           <i className="fa-solid fa-star star text-gray-950"></i>
      </div>
  <div className='my-2'>
  <div className='container'>
  <div className='row-tw '>

{arrData.map((prod)=> <div key={prod.id} className='  w-1/3 p-3'>
<div className='row-tw gap-4'>
<div className='image relative '>
 <div className='layout bg-emerald-700  z-30 rounded-xl text-center text-white text-8xl items-center justify-center opacity-90'>
 <i className="fa-solid fa-plus"></i>
 </div>
 <img src={prod.Image} className='  rounded-xl' alt="" />
 

</div>

<div className=' image relative '>
 <div   className='layout bg-emerald-700  z-30 rounded-xl text-center text-white text-8xl items-center justify-center opacity-90'>
 <i className="fa-solid fa-plus"></i>
 </div>
 <img src={prod.Image} className='  rounded-xl ' alt="" />

</div>
</div>
   
          
   
   

  
   

   


</div>)}

</div>
  </div>
    </div> 
    
     
   </div>
  </div>
  )
}


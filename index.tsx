import React from 'react'
import Header from './components/Header'
import Image from 'next/image'

const page = () => {
  return (
   <div>
      <Header/>
     <div className='flex h-[150px] '>
      <div className=' w-[300px] flex flex-col justify-center items-start m-12'>
<h1 className=' h-[100px] w-2/3 mt-[300px]  ml-[107.49px] font-bold '>
   IMPECCABLE CRAFTSMANSHIP AND FINESSE
   </h1>
   
   <p className='w-[400px] h-[50px]   ml-[100px]  text-[#787054]
'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

<button className='w-[180px] h-[400px] mt-[40px] ml-[90px] bg-[#A29875] gap-0.5 rounded-md text-[#FFFFFF]'>Explore Now</button>
</div>

<div className='w-[300px] flex justify-center items-center  mt-[290px] ml-[500px]'>
<Image  src={"/image/image.png"} alt='model image ' width={800} height={800}/>


</div>
</div>
</div>

  )
}

export default page



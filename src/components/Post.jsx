import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
   const {postData} =  useSelector((state)=> state.posts)
   
  return (
    <div>
   {postData.map((elem, idx)=>{
    return  <div key={idx} className='min-h-[55vh] w-full mb-4'>
    <div className="top h-[4vh] w-full flex gap-2 p-2 items-center">
      <img className='h-[30px] w-[30px] rounded-full ' src={elem.profileImage} alt="" />
      <p className='text-lg '>{elem.name}</p>
      <h1 className=' text-zinc-600'>{elem.time}</h1>
    </div>
    <img className='mt-4 h-[40vh] w-full object-cover object-center' src={elem.story} alt="" />
    <div className='flex justify-between p-2'>
   <div className='flex gap-2'>
   <i class="ri-heart-line text-2xl"></i>
    <i class="ri-chat-3-line text-2xl"></i>
    <i class="ri-share-circle-line text-2xl"></i>
   </div>
   <i class="ri-bookmark-line text-2xl"></i>
    </div>
    <div className='px-2 font-medium'>
      <h1>{elem.likes} likes</h1>
      <div className='flex items-center'>
      <h2 className='mr-2'>{elem.name}</h2>
      <h4 className='font-normal'>some caption with details.</h4>
      </div>
    </div>
  </div>
   })}
    </div>
  )
}

export default Post

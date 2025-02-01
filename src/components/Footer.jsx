import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white fixed h-[70px] w-full shadow-2xl border border-zinc-300 bottom-0 flex justify-between px-10 items-center'>
      <i class="ri-home-line text-2xl"></i>
      <i class="ri-search-line text-2xl"></i>
      <i class="ri-share-2-line text-2xl"></i>
      <img className='h-[30px] w-[30px] rounded-full object-center object-cover' src="https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const submitHanlder = (e)=>{
   e.preventDefault()
  }
  return (
    <div className='h-screen w-full'>
      <img className='h-[30vh] m-auto mt-28' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-text-icon.png" alt="" />
      <form  className='flex flex-col'  action=""
      onSubmit={(e)=>{
       submitHanlder(e)
       console.log(username);
       console.log(password);
       
       
      }}
      >
        <input
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        className='block w-[90%] py-2 px-1 border-2 border-zinc-500 m-auto rounded mb-4' type="text" placeholder='Username'/>
        <input
         value={password}
         onChange={(e)=>{
           setpassword(e.target.value)
         }}
        className='block w-[90%] py-2 px-1 border-2 border-zinc-500 m-auto rounded mb-4' type="password" placeholder='Password'/>
        <input className='py-2 px-4 w-[90%] bg-blue-500 text-white m-auto rounded shadow'  type="submit" value="Log in"/>

      </form>
      <h1 className='text-center mt-2 text-lg'>Dont have an account? <Link className='text-blue-500' to="/">Sign up</Link></h1>

    </div>
  )
}

export default LoginPage

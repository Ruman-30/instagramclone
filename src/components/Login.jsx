import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")

  const submitHanlder = (e)=>{
   e.preventDefault()
   console.log(username);
   console.log(email);
   console.log(name);
   console.log(password);
   setusername("")
   setemail("")
   setname("")
   setpassword("")
   
  }
  return (
    <div className='h-screen w-full'>
      <img className='h-[30vh] m-auto mt-10' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-text-icon.png" alt="" />
      <form className='flex flex-col ' action=""
       onSubmit={(e)=>{
        submitHanlder(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        className='border-2 border-zinc-500 block w-[90%] mb-4 py-2 m-auto px-1 rounded shadow' type="text" placeholder='Username'/>
        <input
         value={email}
         onChange={(e)=>{
           setemail(e.target.value)
         }}
        className='border-2 border-zinc-500 block w-[90%] mb-4 py-2 m-auto px-1 rounded shadow' type="email" placeholder='Email'/>
        <input
         value={name}
         onChange={(e)=>{
           setname(e.target.value)
         }}
        className='border-2 border-zinc-500 block w-[90%] mb-4 py-2 m-auto px-1 rounded shadow' type="text" placeholder='Name'/>
        <input
         value={password}
         onChange={(e)=>{
           setpassword(e.target.value)
         }}
        className='border-2 border-zinc-500 block w-[90%] mb-4 py-2 m-auto px-1 rounded shadow' type="password" placeholder='Password'/>
        <input
        className='py-2 px-4 w-[90%] bg-blue-500 text-white m-auto rounded shadow'  type="submit" value="Make New Account"/>
      </form>
      <h1 className='text-center mt-2 text-lg'>Already have an account? <Link className='text-blue-500' to="/login">Log in</Link></h1>
    </div>
  )
}

export default Login

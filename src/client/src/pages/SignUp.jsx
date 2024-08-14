import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-50'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left side */}
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
      <span className='px-2 py-1 bg-gradient-to-r from-red-700 via-orange-500
       to-yellow-300 rounded-lg text-white'>
        LuciLiving
      </span>
      Blog
    </Link>
    <p className='text-sm mt-5'>
      This is a demonstration of how you can signup with your email and password.
    </p>
    </div>
     {/* Right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div className=''>
            <Label value='Your Username'/>
            <TextInput type='text' placeholder='Username' id='username'/>
          </div>
          <div className=''>
            <Label value='Your Email'/>
            <TextInput type='text' placeholder='Name@Company.com' id='email'/>
          </div>
          <div className=''>
            <Label value='Your Password'/>
            <TextInput type='text' placeholder='Password1234' id='password'/>
          </div>
          <Button gradientDuoTone='redToYellow' type='submit' pill>Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span> Have an account? </span>
            <Link to="/sign-in" className='text-blue-500'> Sign In </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

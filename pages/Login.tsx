import React from 'react'
import Copyright from './Copyright'

export default function Login() {
  return (
    <div>
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900'>
    <div className='rounded-xl bg-gray-900 p-24 pb-12 pt-10 w-128 flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>LOGIN</h1>
        <p className='text-sm text-center text-gray-500 mt-5'>Please enter your login and password</p>

        <div className='flex justify-center items-center'>
        <input className='mt-10 bg-transparent border-solid border-2 border-gray-800 rounded-lg p-2 w-30
        focus:outline-none'
        type='text' placeholder='E-mail'>
        </input>
        </div>

        <div className='flex justify-center items-center'>
        <input className='mt-5 bg-transparent border-solid border-2 border-gray-800 rounded-lg p-2 w-30
        focus:outline-none'
        type='password' placeholder='Password'>
        </input>
        </div>
        <a><p className='text-sm text-center text-gray-500 mt-5 hover:cursor-pointer'>Forgot password?</p></a>
        <div className='flex justify-center items-center mt-12'>
        <button className='rounded-lg duration-300 border-solid border-2 border-white p-2 px-8 hover:text-black hover:bg-gray-300 hover:duration-300'>Login</button>
        </div>
        <div className='flex justify-center items-center mt-5 gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
            className="bi bi-google hover:cursor-pointer hover:scale-110" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
            className="bi bi-facebook hover:cursor-pointer hover:scale-110" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
            className="bi bi-twitter-x hover:cursor-pointer hover:scale-110" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>
        </div>
        <div className='flex justify-center items-center mt-12'>
        <a><p className='text-sm text-center text-gray-500 mt-5 w-max hover:cursor-pointer'>Don´t have an account? Sign Up</p>
        </a>
        </div>
    </div>
</div>
</div>
  )
}

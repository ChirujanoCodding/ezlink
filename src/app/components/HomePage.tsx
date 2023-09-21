import React from 'react'
import NavBar from './NavBar'
import Characteristics from './Characteristics'
import Copyright from './Copyright'

export default function HomePage() {
  return (
    <div>
    <NavBar></NavBar>
		<main className='flex min-h-screen flex-col items-center justify-center px-56 bg-white text-black '>
				<div className='mb-36'>
				{/* TITLE */}
				<div className='flex justify-center align-center'>
				<h1 className='text-center text-8xl font-black text-blue-500 '>Ez</h1>
				<h1 className='text-center text-8xl font-black'>Link</h1>
				</div>
				
				{/* //Input */}
				<input className='mt-10 border-solid border-2 border-gray-300 rounded-l-lg p-2 w-96
				focus:outline-none'
				type='text' placeholder='Enter Link URL'>
				</input>
				<button className='duration-300 bg-gray-300 p-2.5 left-2.5 rounded-r-lg w-20 text-black font-black
				hover:bg-gray-400 hover:duration-300'>→</button>

				{/* //Invalid URL INDICATOR */}
				<div className='flex items-center mt-5'>
					<div className='bg-red-500 w-4 h-4 rounded-lg mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
						stroke="currentColor" className="w-4 h-4 text-white">
  						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
					<h5 className='text-red-500'>Invalid URL</h5>
				</div>
				
				{/* //Valid URL INDICATOR */}
				<div className='flex items-center mt-5'>
					<div className='bg-lime-500 w-4 h-4 rounded-lg mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>

				</div>
					<h5 className='text-lime-500'>Valid URL</h5>
				</div>

			</div>
			<Characteristics></Characteristics>
		</main>
			<Copyright></Copyright>
            </div>
  )
}

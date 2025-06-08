import React from 'react'
import { FaAmilia, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'> 
          <div className='flex-1 mb-4 md:mb-0'> 
            <h3 className='text-2xl font-bold mb-2'>Abhishek</h3>
            <p className='text-gray-400'>Front-End Developer skilled in React, JavaScript, and modern UI, building web solutions that are both functional and beautiful.</p>
          </div>
          <div className='flex-1 w-full'>
            <div className="flex items-center space-x-2">
              <input 
                type='email' 
                placeholder='Enter Email' 
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
              />
              <button 
                type='submit' 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400'>
            Abhi.Pt_2002 &copy; {new Date().getFullYear()}
          </p>
          <div className='flex space-x-4 my-4 md:my-0'>
           
            <a href="https://www.linkedin.com/in/abhishek-prajapati-ap2004/" className='text-gray-400 hover:text-white'>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/abhi.pt_2002/?hl=en" className='text-gray-400 hover:text-white'>
              <FaInstagram />
            </a>
            <a href="https://github.com/abhi252002" className='text-gray-400 hover:text-white'>
              <FaGithub />
            </a>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className='text-gray-400 hover:text-white'>
              Privacy
            </a>
            <a href="#" className='text-gray-400 hover:text-white'>
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

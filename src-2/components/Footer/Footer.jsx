import Link from 'next/link'
import React from 'react'
import "./fotter.css"


const Footer = () => {
  return (

    <div className="  	">
    <div className='container flex justify-around py-20 '>
      <div>
          <div>Professor Mokhter Ahmad</div>
          <div className=''>
            <Link href="/" className=''>Facebook</Link>
            <Link href="/" className=''>Youtube</Link>
            <Link href="/" className=''>Twitter</Link>
            <Link href="/" className=''>Instragram</Link>
            <Link href="/" className=''>Linkedin</Link>
          </div>
      </div>
      <div>
          <div className='flex flex-col '>
            <Link href="/academic" className=''>Online Course</Link>
            <Link href="/lecture" className=''>Video Lecture</Link>
            <Link href="/applyProgram" className=''>Apply Program</Link>
            <Link href="/consultancy" className=''>Shariyah Consultency</Link>
          </div>
      </div>
      <div>
          <span>Get In Touch</span>
          <div>
            <div>
              <span>Call</span> <span>+880 123 456 789</span>
            </div>
            <div>
              <span>Email</span> <span>info@mokhterahmad.com</span>
            </div>
            <div>
              <span>Address</span> <span>MohammadPur, Dhaka</span>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Footer

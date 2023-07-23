import Image from 'next/image'
import React from 'react'
import photo from './consultancy.png'
import Link from 'next/link'



const Consultancy = () => {
  return (
    <section>
        <div className="st-height-b100 st-height-lg-b80"></div>
    <div className="container">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">Consultancy</h4>
        <h2 className="st-section-heading-subtitle">Consultancy</h2>
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div>
    {/* end Titie  */}

        <div className='container'>
        <div className='flex items-center	'>
            <div className='w-1/2'>
                <div className=''>
                    <h1>Sharīah Consultency</h1>
                </div>
                <div className='my-3 '>
                    <span className='border border-[#000] rounded-2xl py-1 px-3  text-center mr-4'>Sharīah Prescription</span>
                    <span className='border border-[#000] rounded-2xl py-1 px-3  text-center '>Family Consultancy</span>
                </div>
                <div className='py-3'>
                    <p className='text-justify'>Our Sharī'ah Consultancy offers expert guidance and solutions tailored to meet your specific needs within the 
                    framework of Islamic law. We understand the importance of adhering to Sharī'ah principles and ensuring compliance in all aspects of 
                    your personal, professional, and financial affairs. Our team of seasoned Sharī'ah consultants 
                    brings a wealth of knowledge and experience in Islamic jurisprudence. 
                    Whether you are an individual, a business, or an organization, 
                    we are here to assist you in navigating the complexities of Sharī'ah law and its application.
                    </p>
                </div>
                <div className="st-hero-btn">
                      <Link href="/applyProgram" className="st-btn st-style1 st-color1 st-smooth-move">Ask Question</Link>
                  </div>
            </div>
            <div className='w-1/2'>
                <Image src={photo} alt='Consultancy'></Image>
            </div>
        </div> 
        </div>

    </section>
  )
}

export default Consultancy

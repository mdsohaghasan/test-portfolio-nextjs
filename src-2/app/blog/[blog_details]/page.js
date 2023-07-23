import Image from 'next/image'
import React from 'react'
import quran from './quran.jpg'


 
const page = async ({ params }) => {

    const { blog_details } = params;
      console.log(blog_details);

   

    const res = [
        {
          id: 1,
          title: "Exploring the Essence of Islamic Spirituality: Insights and Reflections",
          url: quran,
          author: "mokhter ahmad",
          date: "12-12-2022"
        },
        {
          id: 2,
          title: "Unveiling the Beauty of Islam: A Journey of Faith and Enlightenment",
          url: quran,
          author: "mokhter ahmad",
          date: "12-12-2022"
        },
        {
          id: 3,
          title: "The Path of Submission: Understanding the Principles of Islamic Belief",
          url: quran,
          author: "mokhter ahmad",
          date: "12-12-2022"
        },
        {
          id: 4,
          title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
          url: quran,
          author: "mokhter ahmad",
          date: "12-12-2022",
        },
      ]

      const [{  title, url, author, date }] = res;
       

  return (

    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
          <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      
        <div className="flex container gap-8">
          <div className="basis-3/4  ">
           

              {/* <!-- .slick-slide-in --> */}
              <div className="slick-slide-in">
                <div className="st-post-single st-style1">
                  <a href="#" className="st-post-thumb st-zoom">
                    <Image src={url} className="st-zoom-in" alt="blog1" />
                  </a>
                  <div className="st-post-info">
                    <div className="st-post-date">
                      By:
                      <a href="#" className="st-post-author">
                        {author}
                      </a>
                      <span className="st-post-date-divider">|</span>
                      <span className="st-post-publish-date">{date}</span>
                    </div>
                    <h4 className="st-post-title">
                        {title}
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- .slick-slide-in --> */}

           
          </div>
          
          <div className="basis-1/4  bg-[#070D1B] p-4">
            <div>
              <h2>Categories</h2>
            </div>
            <div>
              <ul className="text-xl">
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Others</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

     <div className="st-height-b100 st-height-lg-b80"></div>
    </section>



  )
}

export default page




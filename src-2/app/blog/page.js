import React from "react";
import Image from "next/image";
import quran from "./quran.jpg";
import Link from "next/link";

const page = async () => {

  // const data = await fetch('https://jsonplaceholder.typicode.com/photos')
  // const res = await data.json()
  // console.log(res)

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
            <div className="grid grid-cols-2 gap-8 ">

            {res.map((post) => (
              <div key={post.id}>
              <Link href={`/blog/${post.id}`}>

                <div className="slick-slide-in">
                <div className="st-post-single st-style1">
                  <a href={post.id} className="st-post-thumb st-zoom">
                    <Image src={post.url} className="st-zoom-in" alt="blog1" width={100} height={100} />
                  </a>
                  <div className="st-post-info">
                    <div className="st-post-date">
                      By:
                      <a href="#" className="st-post-author">
                       {post.author}
                      </a>
                      <span className="st-post-date-divider">|</span>
                      <span className="st-post-publish-date">{post.date}</span>
                    </div>
                    <h4 className="st-post-title">
                      <a href={post.id}>
                        {post.title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              
                </Link>
             </div>
           ))}


              
              {/* <!-- .slick-slide-in --> */}
              {/* <div className="slick-slide-in">
                <div className="st-post-single st-style1">
                  <a href="blog-details.html" className="st-post-thumb st-zoom">
                    <Image src={quran} className="st-zoom-in" alt="blog1" />
                  </a>
                  <div className="st-post-info">
                    <div className="st-post-date">
                      By:
                      <a href="#" className="st-post-author">
                        Admin
                      </a>
                      <span className="st-post-date-divider">|</span>
                      <span className="st-post-publish-date">27-09-2020</span>
                    </div>
                    <h4 className="st-post-title">
                      <a href="blog-details.html">
                        What do you think makes someone a good designer?
                      </a>
                    </h4>
                  </div>
                </div>
              </div> */}
              {/* <!-- .slick-slide-in --> */}

            </div>
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
  );
};

export default page;

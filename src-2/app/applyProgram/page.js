import React from 'react'

const applyProgram = () => {
  return (
    <div>
      <h1 className='text-5xl text-center py-3'>Appply Program</h1>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Appply Program</h4>
          <h2 className="st-section-heading-subtitle">Appply Program</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
  
      {/* <!-- Contact Container --> */}
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Appply Your Next Program</h3>
            <div id="st-alert"></div>
            <form action="#" method="POST" className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input type="text" id="name" name="name" placeholder="Your Name" required/>
              </div>
              <div className="st-form-field">
                <input type="text" id="email" name="email" placeholder="Your Email" required/>
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Your Subject" required/>
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required></textarea>
              </div>
              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Apply</button>
            </form>
          </div>
          <div className="st-height-b0 st-height-lg-b30"></div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
    </div>
  )
}

export default applyProgram

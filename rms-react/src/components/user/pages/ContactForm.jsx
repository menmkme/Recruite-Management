import React from "react"

const Contact = () => {
    return (
      <>
      <section className="contact">
        <div className="container">
            <div className="contact_div">
                <form>
                    <div className="contact-form">
                        <div className="row1">
                            <input
                             type="text"
                             className="form-control"
                             name="name"
                             placeholder="name"
                             />

                            <input
                             type="email"
                             className="form-control"
                             name="email"
                             placeholder="email"
                             />

                        </div>

                        <div className="row2">
                            <input
                             type="text"
                             className="form-control"
                             name="subject"
                             placeholder="subject"
                             />
                             
                        </div>

                        <div className="row3">
                            <textarea name="message" cols='30' rows='10'></textarea>
                             
                        </div>

                        <button className="btn">Send Message</button>
                    </div>
                </form>
                <div className="contact_address ">

                <div className="row info">
                        <i className="fa fa-map-marker"></i>
                        <div className="info">
                            <p className="">No 27, Bukuru(Layin Madaki), Jos</p>
                            <p>Family Center : 21 Bakin Kasuwa Street - Plateau, Nigeria</p>
                        </div>
                    </div>

                    <div className="row">
                        <i className="fa fa-envelope"></i>
                        <div className="info">
                            <p className="">No 27, Bukuru(Layin Madaki), Jos</p>
                            <p>Family Center : 21 Bakin Kasuwa Street - Plateau, Nigeria</p>
                        </div>
                    </div>

                    <div className="row">
                        <i className="fa fa-volume-control-phone"></i>
                        <div className="info">
                            <p className="">No 27, Bukuru(Layin Madaki), Jos</p>
                            <p>Family Center : 21 Bakin Kasuwa Street - Plateau, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
            Assalamu Alaikum
          </div>
      </section>
          
          
      </>
      )
  }
  
  export default Contact
import React from 'react';
import "./Contact.css";

const ContactPage = () => {
    return (
        <section className="contact my-5 py-5" id="ContactPage">
            <div className="container1">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-secondary">Contact Us </h5>
                    <h1 className="color">Alawys Connect With Us</h1>
                </div>
            </div>

            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" name="" id="" placeholder="Enter your name" className="form-control mb-3" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="" id="" placeholder="Enter your email" className="form-control mb-3" />
                    </div>
                    <div className="form-group">
                        <input type="subject" name="" id="" placeholder="Enter your subject" className="form-control mb-3" />
                    </div>

                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" className="form-control mb-3" />
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-primary mb-3"> Submit</button>
                    </div>

                </form>
            </div>
        </section>
    );
};

function Contact() {
  return (
    <section id="contact">
    <div >
      <ContactPage/>
    </div>
    </section>
  );
}

export default Contact;
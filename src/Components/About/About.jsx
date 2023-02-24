import React from 'react';
import "./About.css"
import baby from '../../images/dr.jpg';
import baby2 from '../../videos/drs.mp4';
import baby3 from '../../videos/drs2.mp4';




const FeaturedService = () => {
  return (
    <div className="feature-service pb-0 pb-md-5 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-sm-6 col-12">
            <img src={baby} className="img" alt="" />
          </div>
          <div className="col-md-7 col-sm-6 col-12 align-self-center">

            <h1 className='h1'>About Trials Hub</h1>
            <p className="p1">At Trials Hub, LLC we represent an integrated team of professionals who bring their expertise from all expect of research. We believe in developing strong and lasting relationships with our clients built on trust, mutual respect, and collaboration. We implement best practices to deliver results you can trust. Our personal attention to detail gives us the ability to provide timely and proficient services to our clients.</p>


          </div>

        </div>

      </div>
    </div>


  );
};

const FeaturedService2 = () => {
  return (
    <div className="feature-service pb-0 pb-md-5 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-sm-6 col-12">
            <video width="450" height="280" controls className='video'>
              <source src={baby3} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-7 col-sm-6 col-12 align-self-center">
            <h1 className='h1'> Clinical Research Development Starts at the Site</h1>
            <p className="p1">Trials Hub integrates the clinical trial model as a business by crafting subject enrollment procedures, operational workflows and quality management processes that oversee study startup, execution and closeout.
              Our approach to performance results in more subjects enrolled, fewer dropouts and higher data quality.</p>

          </div>

        </div>

      </div>
    </div>


  );
};

const OurService = () => {
  return (
    <div className="feature-service pb-0 pb-md-5 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-sm-6 col-12">
            {/* <div className="col-md-5 col-sm-6 col-12">
              <img src={baby4} className="img" alt="" />
            </div> */}
            <video width="450" height="350" controls className='video2'>
              <source src={baby2} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>


          </div>
          <div className="col-md-7 col-sm-6 col-12 align-self-center">
            <h1 className='h1'>Our Solutions Include:</h1>
            <p className="p1">At Trials Hub, LLC we represent an integrated team of professionals who bring their expertise from all expect of research. We believe in developing strong and lasting relationships with our clients built on trust, mutual respect, and collaboration. We implement best practices to deliver results you can trust. Our personal attention to detail gives us the ability to provide timely and proficient services to our clients.</p>
        

          </div>
          <div className="card-list">
            <div className="cardset">
              <h2>Selection & Negotiation</h2>
              <ul>
              <li> Study Selection and Startup</li>
              <li>Vendor Selection and Oversight</li>
              <li>Filling out SFQs</li>
              <li>handling contracts like CTA & CDA</li>
              <li>Budget Negotiation</li>
              </ul>
            </div>
            <div className="cardset">
              <h2>Assistanace & Submissions</h2>
              <ul>
              <li>Sites Submissions for IRB</li>
              <li>Assist Sites with Regulatory Packages</li>
              <li>Assist Sites with Visits: SIV, MV, and Close-out</li>
              <li>eReg Binder Management</li>
              <li>Developing eLearning / Remote Training for SIV</li>
              <li>eCRF Design</li>
              </ul>
            </div>
            <div className="cardset">
              <h2>Maintenance & Assurance</h2>
              <ul>
              <li>Maintain Invoices</li>
              <li>Clinical Project Management</li>
              <li>Remote and Risk-Based Monitoring</li>
              <li>Data Management and Queries</li>
              <li>Quality Assurance</li>
              <li>Payment Reconciliation</li>
              </ul>
            </div>
          </div>


        </div>

      </div>
    </div>


  );
};


function About() {
  return (
    <section id="about">
      <div >
        <FeaturedService />

        <FeaturedService2></FeaturedService2>

        <OurService />
      </div>
    </section>
  );
}

export default About;
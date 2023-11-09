import React from "react";


const WhyUs = () => {
    return (
        <section className="section why-us" data-section="section2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Why choose Slate?</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id='tabs'>
            <section className='tabs-content'>
              <article id='tabs-1'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-01.png" alt="img-why-us"/>
                  </div>
                  <div className="col-md-6">
                    <h4>Best Education</h4>
                    <p>Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-2'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-02.png" alt="img-why-us"/>
                  </div>
                  <div className="col-md-6">
                    <h4>Top Level</h4>
                    <p>You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.</p> 
                    <p>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-3'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt="img-why-us"/>
                  </div>
                  <div className="col-md-6">
                    <h4>Quality Meeting</h4>
                    <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> now.</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default WhyUs;
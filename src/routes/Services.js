import React from 'react';
import '.././styles/Services.css'

function Services() {
  return (
    <>
    <section className="services-intro-container">
      <article className="services">
        <h2>OUR SERVICE</h2>
        <p>We are a fast, professional and fully accredited work safe contractor who save our customers time and money by <b style={{fontWeight: '700'}}>NOT</b> replacing but repairing damaged items on site.</p>
        <p>Scratches, dents, cracks, stains and scuff marks or even just fatigued surfaces can be revived to look as good as new by our fully trained technicians.</p>
      </article>
      <article className="services">
        <h2>OUR COVERAGE</h2>
        <p>Whether you require a small one off small repair or you need us to visit a number of sites, Revive can help.</p>
        <p>We cover a large area across the South East including:</p>
        <div className="area-list-container">
          <ul className="area-list">
            <li>Brighton</li>
            <li>Crawley</li>
            <li>Eastbourne</li>
            <li>Horsham</li>
            <li>Littlehampton</li>
            <li>Lewes</li>
          </ul>
          <ul className="area-list">
            <li>Seaford</li>       
            <li>Worthing</li>
            <li>East Sussex</li>
            <li>West Sussex</li>
            <li>Kent</li>
            <li>Surrey</li>
          </ul>
        </div>
      </article>
      <article className="services">
        <h2>OUR OFFER</h2>
        <p>Revive Ltd have the skills and experience to restore, repair and renew virtually any hard surface both internally and externally with over 16 years’ experience within this industry.</p>
        <p>We pride ourselves on the quality of our work. We are confident that we can offer very competitive rates compared to other larger competitors with greater overheads who may look to compromise on quality!</p>
      </article>
    </section>
    <h2 className="services-detail-heading">WE CAN REVIVE ALL THIS AND MORE</h2>
    <section className="services-detail-container">
      <article className="services-detail">x
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>BASINS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>BATHS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>BRICKS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>CLADDING & PANELLING</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>CONSERVATORIES</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>
        <h3>COUNTER-TOPS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>DOORS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>FURNITURE</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>FLOORS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>FORMICA</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>GRP</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>HIGH GLOSS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>IPS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>KITCHEN UNITS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>KITCHEN DOORS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>LAMINATES AND VENEERS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>MARBLE</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>POWDER-COATED SURFACES</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>SHOWER TRAYS</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>STONE</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span> 
        <h3>STAINLESS STEEL</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>  
        <h3>TILES</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>  
        <h3>WINDOW FRAMES</h3>
      </article>
      <article className="services-detail">
        <span className="material-symbols-outlined check-circle">check_circle</span>  
        <h3>uPVC</h3>
      </article>
    </section>
    <section className="services-contact-container">
      <div className="services-contact">
        <p>If you need any more information about our services or require a quote, please get in touch with us.</p>
        <h3><span className="material-symbols-outlined email-logo">mail</span> info@reviverepairs.com</h3>
        <h3>CALL 07917 442218</h3>
      </div>
    </section>
    </>
  )
}

export default Services
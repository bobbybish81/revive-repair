import React from 'react';
import '.././styles/Services.css'

function Services() {

  const services = [
        'BASINS',
        'BATHS',
        'BRICKS',
        'CLADDING & PANELLING',
        'CONSERVATORIES',
        'COUNTER-TOPS',
        'DOORS',
        'FURNITURE',
        'FLOORS',
        'FORMICA',
        'GRP',
        'HIGH GLOSS',
        'IPS',
        'KITCHEN UNITS',
        'KITCHEN DOORS',
        'LAMINATES AND VENEERS',
        'MARBLE',
        'POWDER-COATED SURFACES',
        'SHOWER TRAYS',
        'STONE',
        'STAINLESS STEEL',
        'TILES',
        'WINDOW FRAMES',
        'uPVC'
  ]

  return (
    <>
      <section className="services-intro-container">
        <article className="services">
          <h2>OUR SERVICE</h2>
          <p className="services-text">We are a fast, professional and fully accredited work safe contractor who save our customers time and money by <b style={{fontWeight: '700'}}>NOT</b> replacing but repairing damaged items on site.</p>
          <p className="services-text">Scratches, dents, cracks, stains and scuff marks or even just fatigued surfaces can be revived to look as good as new by our fully trained technicians.</p>
        </article>
        <article className="services">
          <h2>OUR COVERAGE</h2>
          <p className="services-text">Whether you require a small one off small repair or you need us to visit a number of sites, Revive can help.</p>
          <p className="services-text">We cover a large area across the South East including:</p>
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
          <p className="services-text">Revive Ltd have the skills and experience to restore, repair and renew virtually any hard surface both internally and externally with over 16 years’ experience within this industry.</p>
          <p className="services-text">We pride ourselves on the quality of our work. We are confident that we can offer very competitive rates compared to other larger competitors with more overheads where quantity may compromise on quality!</p>
        </article>
      </section>
      <h2 className="services-detail-heading">WE CAN REVIVE ALL THIS AND MORE</h2>
      <section className="services-detail-container">
        {services?.map((service, index) => {
          return (
            <article key={index} className="services-detail">
              <span className="material-symbols-outlined check-circle">check_circle</span>
              <h3>{service}</h3>
            </article>
        )
        })}
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
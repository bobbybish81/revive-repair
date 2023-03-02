import React, { useLayoutEffect } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import Contact from '../components/Contact';
import '.././styles/Services.css'

const Services = () => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

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
      <section className='services-intro'>
        <div className='services-intro-container'>
          <article className='services'>
            <h2>OUR SERVICE</h2>
            <p className='services-text'>We are a fast, professional and fully accredited work safe contractor who save our customers time and money by <b style={{color: '#f47323'}}>NOT</b> replacing but repairing damaged items on site.</p>
            <p className='services-text'>Scratches, dents, cracks, stains, scuff marks or even just fatigued surfaces can be revived to look as good as new by our fully trained technicians.</p>
          </article>
          <article className='services'>
            <h2>OUR COVERAGE</h2>
            <p className='services-text'>Whether you require a small one off repair or you need us to visit a number of sites, Revive can help.</p>
            <p className='services-text'>We cover a large area across the South East including:</p>
            <div className='area-list-container'>
              <ul className='area-list'>
                <li>Brighton</li>
                <li>Crawley</li>
                <li>Eastbourne</li>
                <li>Horsham</li>
                <li>Littlehampton</li>
                <li>Lewes</li>
              </ul>
              <ul className='area-list'>
                <li>Seaford</li>       
                <li>Worthing</li>
                <li>East Sussex</li>
                <li>West Sussex</li>
                <li>Kent</li>
                <li>Surrey</li>
              </ul>
            </div>
          </article>
          <article className='services'>
            <h2>OUR OFFER</h2>
            <p className='services-text'>Revive Ltd have the skills and experience to restore, repair and renew virtually any hard surface both internally and externally with over 16 years&apos; experience within this industry.</p>
            <p className='services-text'>We pride ourselves on the quality of our work. We are confident that we can offer very competitive rates compared to much larger competitors with higher overheads where quantity may compromise on quality!</p>
          </article>
        </div>
      </section>
      <h2 className='services-detail-heading'>WE CAN REVIVE ALL THIS AND MORE</h2>
      <section className='services-detail-container'>
        {services?.map((service, index) => {
          return (
            <article key={index} className='services-detail'>
              <MdOutlineCheckCircleOutline className='check-circle'/>
              <h3>{service}</h3>
            </article>
        )
        })}
      </section>
      <Contact/>
    </>
  )
}

export default Services
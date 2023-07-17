import React, { useState, useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import IntroImage from '../components/IntroImage';
import '.././styles/Home.css'

const Home = ({ images }) => {

  return (
    <>
      <section className='home-intro-mobile'>
        <article className='intro'>
          <h1 className='intro-heading'>WE REVIVE SURFACES</h1>
          <p className='intro-text'>Revive Repairs specialise in repairing and renovating scratches, dents, cracks, marks and damaged surfaces. Our technicians are fully trained in all aspects of surface repair technology and are CSCS & SSSTS qualified.</p>
          <div>
            <p className='intro-text'>Please get in touch for a competitive quote.</p>
            <div className='intro-number'>
              <a href='tel:+447917442218'>CALL 07917 442218</a>
            </div>
            <div className='intro-email'>
              <span className='material-symbols-outlined email-logo'>mail</span>
              <a className='mailtoui' href='mailto:info@reviverepairs.com'>info@reviverepairs.com</a>
            </div>
            <p className='intro-top-tip'>Top Tip - Please attach some pictures of the damaged area along with your contact details and post code. This is so we can assess and help you more quickly and efficiently</p>
          </div>
        </article>
      </section>
      <section className='home-intro-desktop'>
        <div className='home-intro-container'>
          <article className='intro'>
            <h1 className='intro-heading'>WE REVIVE SURFACES</h1>
            <p className='intro-text'>Revive Repairs specialise in repairing and renovating scratches, dents, cracks, marks and damaged surfaces. Our technicians are fully trained in all aspects of surface repair technology and are CSCS & SSSTS qualified.</p>
            <div>
              <p className='intro-text'>Please get in touch for a competitive quote.</p>
              <a className='intro-number' href='tel:+447917442218'>CALL 07917 442218</a>
              <div className='intro-email'>
                <MdOutlineEmail className='email_logo'/>
                <a className='mailtoui' href='mailto:info@reviverepairs.com'>info@reviverepairs.com</a>
              </div>
              <p className='intro-top-tip'>Top Tip - Please attach some pictures of the damaged area along with your contact details and post code. This is so we can assess and help you more quickly and efficiently</p>
            </div>
          </article>
          <article className='intro-image-article'>
            <div className='before-image-container'>
              <IntroImage
                images={images}
                folder={'beforeImages'}/>
              <p className='intro-image-text'>BEFORE</p>
            </div>
          </article>
          <article className='intro-image-article'>
            <div className='after-image-container'>
              <IntroImage
                  images={images}
                  folder={'afterImages'}/>
              <p className='intro-image-text'>AFTER</p>
            </div>
          </article>
        </div>
      </section>
      <section className='home-services-container'>
        <article className='home-services'>
          <p className='home-services-text'>Revive are a fully accredited, work safe contractor who save our clients time and money by NOT replacing damaged items but by repairing them on site. Scratches, dents, cracks, stains and scuff marks, even fatigued surfaces can be revived by our fully trained technicians. We can even resurface items in different colours to the original, giving a fresh new look to outdated paint schemes and fashions.</p>
          <p className='home-services-text'>Whether the cause is impact, staining, contamination, burning, vandalism or simply accidental damage, Revive can make any surface as good as new.</p>
          <p className='home-services-text'>We offer specialist repairs to a wide range of sectors from construction, retail, sports & leisure, hotel & catering, NHS/health care, education and domestic properties. Our technicians are equipped to carry out on-site repairs in almost any situation.</p>
          <p className='home-services-text'>Revive can be called upon at any time with full coverage across Sussex, Surrey and Kent. Whether you require a one off small repair or you need us to visit a number of sites, Revive can help.</p>
        </article>
        <article className='quote-container'>
        <div className='quote'>
          <h1 className='quote-heading'>NEED A QUOTE?</h1>
          <p className='quote-text'>If you need any more information about our services or require a quote, please get in touch with us.</p>
          <div className='quote-email'>
            <a className='mailtoui' href='mailto:info@reviverepairs.com'>SEND AN EMAIL</a>
          </div>
          <div className='quote-number'>
            <a href='tel:+447917442218'>CALL 07917 442218</a>
          </div>
        </div>
        </article>
      </section>
      <section>
        <article className='repairs-container'>
          <h2 className='repair-heading'>WHAT WE CAN REVIVE</h2>
          <p className='repairs-text'>BASINS | BATHS | BRICKS | CLADDING & PANELLING | CONSERVATORIES | COUNTER-TOPS | DOORS | FURNITURE | FLOORS | FORMICA | GRP | HIGH GLOSS | IPS | KITCHEN UNITS</p>
          <p className='repairs-text'>KITCHEN DOORS | LAMINATES AND VENEERS | MARBLE | POWDER-COATED SURFACES | SHOWER TRAYS | STONE | STAINLESS STEEL | TILES | WINDOW FRAMES | uPVC</p>
        </article>
      </section>
    </>
  )
}

export default Home
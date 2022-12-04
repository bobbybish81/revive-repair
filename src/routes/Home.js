import React from 'react';
import '.././styles/Home.css'

function Home() {
  return (
    <>
      <section className="main-home-intro-mobile">
        <article className="intro">
          <h1 className="intro-heading">WE REVIVE SURFACES</h1>
          <p className="intro-text">Revive Repairs specialise in repairing and renovating scratches, dents, cracks, marks and damaged surfaces. Our technicians are fully trained in all aspects of surface repair technology and are CSCS & SSSTS qualified.</p>
          <div>
            <p className="intro-text">Please get in touch for a competitive quote.</p>
            <h2 className="intro-number">CALL 07917 442218</h2>
          </div>
        </article>
      </section>
      <section className="main-home-intro-desktop">
        <article className="intro">
          <h1 className="intro-heading">WE REVIVE SURFACES</h1>
          <p className="intro-text">Revive Repairs specialise in repairing and renovating scratches, dents, cracks, marks and damaged surfaces. Our technicians are fully trained in all aspects of surface repair technology and are CSCS & SSSTS qualified.</p>
          <div>
            <p className="intro-text">Please get in touch for a competitive quote.</p>
            <h2 className="intro-number">CALL 07917 442218</h2>
          </div>
        </article>
        <article className="article-intro-image">
          <div className="intro-image" id="after-image">
            <p className="image-text">BEFORE</p>
          </div>
        </article>
        <article className="article-intro-image">
          <div className="intro-image" id="after-image">
            <p className="image-text">AFTER</p>
          </div>
        </article>
      </section>
      <section className="main-home-content">
        <article className="services">
          <p className="services-text">We are a fully accredited, work safe contractor who save our clients time and money by NOT replacing damaged items but by repairing them on site. Scratches, dents, cracks, stains and scuff marks, even fatigued surfaces can be made good or revived by our fully trained technicians. Revive can even resurface items in different colours to the original, giving a fresh new look to outdated paint schemes and fashions.</p>
          <p className="services-text">Whether the cause is impact, staining, contamination, burning, vandalism or simply accidental damage, Revive can make any surface as good as new.</p>
          <p className="services-text">Revive Ltd offer our specialist repairs to a wide range of sectors from construction, retail, sports & Leisure, Hotel & catering, NHS/health care, education and domestic properties, just to mention a few. Our fully trained technicians are equipped to carry out on-site repairs in almost any situation.</p>
          <p className="services-text">Revive can be called upon at any time with full coverage across Sussex, Surrey and Kent. Whether you require a one off small repair or you need us to cover a number of sites, Revive Ltd can help .</p>
        </article>
        <article className="quote">
        <div className="quote-req">
          <p className="quote-text">If you need any more information about our services or require a quote, please get in touch with us.</p>
          <button className="quote-btn">Click here for a FREE quote</button>
        </div>
        </article>
      </section>
      <section>
      <article className="repairs">
        <h2 className="repair-heading">WHAT WE CAN REVIVE</h2>
        <p className="repairs-text">BASINS | BATHS | BRICKS | CLADDING & PANELLING | CONSERVATORIES | COUNTER-TOPS | DOORS | FURNITURE | FLOORS | FORMICA | GRP | HIGH GLOSS | IPS | KITCHEN UNITS</p>
        <p className="repairs-text">KITCHEN DOORS | LAMINATES AND VENEERS | MARBLE | POWDER-COATED SURFACES | SHOWER TRAYS | STONE | STAINLESS STEEL | TILES | WINDOW FRAMES | uPVC</p>
      </article>
        <article className="certificates">
          <img className="certificate-image" alt="PASMA logo" src={require(".././images/logos/PASMA.jpeg")}/>
          <img className="certificate-image" alt="CSCS logo" src={require(".././images/logos/CSCS.png")}/>
          <img className="certificate-image" alt="Safe Contractor logo" src={require(".././images/logos/safe_contractor.jpeg")}/>
          <img className="certificate-image" alt="SSIP logo" src={require(".././images/logos/SSIP_accredited.jpeg")}/>
        </article>
      </section>
    </>
  )
}

export default Home
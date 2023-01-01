import React from 'react';
import '.././styles/Gallery.css';

const Gallery = ({workImages}) => {
  return (
    <>
      <section className="heading-container">
        <h1 className="gallery-heading">DON'T REPLACE.... REPAIR!</h1>
        <h2 className="gallery-subheading">SOME EXAMPLES OF OUR WORK</h2>
      </section>
      <section className="gallery-container">
          {workImages?.map((image, index) => {
            const title = image.toUpperCase().replaceAll('_',' ').slice(0,image.length -5);
            return (
              <article className="image-container" key={index}>
                <h3>{title}</h3>
                <div>
                  <img
                    className="gallery-image"
                    src={require(`../images/before_images/${image}`)}
                    alt="Before_Image" />
                  <p className="gallery-image-text">BEFORE</p>
                </div>
                <div>
                  <img
                    className="gallery-image"
                    src={require(`../images/after_images/${image}`)}
                    alt="After_Image" />
                  <p className="gallery-image-text">AFTER</p>
                </div>
              </article>
            )
          })}
      </section>
      <section className="gallery-contact-container">
        <div className="gallery-contact">
          <p>If you need any more information about our services or require a quote, please get in touch with us.</p>
          <h3>
            <span className="material-symbols-outlined email-logo">mail</span>
            <a className="mailtoui" href="mailto:info@reviverepairs.com">info@reviverepairs.com</a>
          </h3>
          <h3>CALL 07917 442218</h3>
        </div>
      </section>
    </>
  )
}

export default Gallery
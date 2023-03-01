import { useLayoutEffect } from 'react';
import Contact from '../components/Contact';
import '.././styles/Gallery.css';

const Gallery = ({ images }) => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <>
      <section className="heading-container">
        <h1 className="gallery-heading">DON'T REPLACE.... REPAIR!</h1>
        <h2 className="gallery-subheading">SOME EXAMPLES OF OUR WORK</h2>
      </section>
      <section className="gallery">
        <div className="gallery-container">
            {images?.map((image, index) => {
              const title = image.toUpperCase().replaceAll('_',' ').slice(0,image.length -5);
              return (
                <article className="image-container" key={index}>
                  <h3>{title}</h3>
                  <div>
                    <img
                      className="gallery-image"
                      src={require(`../assets/beforeImages/${image}`)}
                      alt="BeforeImage" />
                    <p className="gallery-image-text">BEFORE</p>
                  </div>
                  <div>
                    <img
                      className="gallery-image"
                      src={require(`../assets/afterImages/${image}`)}
                      alt="AfterImage" />
                    <p className="gallery-image-text">AFTER</p>
                  </div>
                </article>
              )
            })}
        </div>
      </section>
      <Contact/>
    </>
  )
}

export default Gallery
import React, { useState, useEffect } from 'react';

const IntroImage = ({ images, folder }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 6000);
    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(() => {
    const img = document.querySelector(`#${folder}-${index}`);
    if (img) {
      img.classList.add('img-display');
    };
    const prevImage = document.querySelector(`#${folder}-${index-1}`);
    if (prevImage) {
      setTimeout(() => {
        prevImage.classList.remove('img-display') 
      }, 1000);
    };
    if (`#${folder}-${index}` === `#${folder}-${images.length-1}`) {
      const lastImage = document.querySelector(`#${folder}-${images.length-1}`);
      setTimeout(() => {
        lastImage.classList.remove('img-display') 
      }, 7000);
    };
  }, [index, folder]);

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          id={`${folder}-${index}`}
          className='intro-image'
          src={require(`../assets/${folder}/${images[index]}`)}
          alt={folder}/>
      ))}
    </>
  );
};

export default IntroImage;
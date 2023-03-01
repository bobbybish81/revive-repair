import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Error.css';

const Error = () => {

  return (
    <section className='error-container'>
      <article>
        <h1>Sorry! Page Not found</h1>
        <Link to={'/'}>
          <p>Return to Homepage</p>
        </Link>
      </article>
    </section>
  )
}

export default Error
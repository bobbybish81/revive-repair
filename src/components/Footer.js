import { Link } from 'react-router-dom';
import '.././styles/Footer.css';

const Footer = ({ setOpenMenu }) => {
  return (
    <>
    <img className='pasma-image' alt='PASMA logo' src={require('../assets/certificates/PASMA_Mobile.png')}/>
    <article className='certificates-mobile'>
      <img className='certificate-image' alt='CSCS logo' src={require('../assets/certificates/CSCS.png')}/>
      <img className='certificate-image' alt='Safe Contractor logo' src={require('../assets/certificates/safe_contractor.jpeg')}/>
      <img className='certificate-image' alt='SSIP logo' src={require('../assets/certificates/SSIP_accredited.jpeg')}/>
      <img className='certificate-image' alt='IPAF logo' src={require('../assets/certificates/IPAF.jpeg')}/>
    </article>
    <article className='certificates-desktop'>
      <img className='certificate-image' alt='PASMA logo' src={require('../assets/certificates/PASMA.jpeg')}/>
      <img className='certificate-image' alt='CSCS logo' src={require('../assets/certificates/CSCS.png')}/>
      <img className='certificate-image' alt='Safe Contractor logo' src={require('../assets/certificates/safe_contractor.jpeg')}/>
      <img className='certificate-image' alt='SSIP logo' src={require('../assets/certificates/SSIP_accredited.jpeg')}/>
      <img className='certificate-image' alt='IPAF logo' src={require('../assets/certificates/IPAF.jpeg')}/>
    </article>
    <div className='footer-text-container'>
      <p className='footer-text'>Revive Repair Ltd • Company number 9868638 • VAT number 233216836 • UTR number 2055420540 </p>
      <p>Click here to read our <Link to={'/Terms_and_Conditions'} style={ {color: 'inherit'} } >
        <b onClick={() => setOpenMenu(false)}>Terms & Conditions</b></Link></p>
      <p>Website developed by <a
          href='https://robertbishwebdeveloper.com'
          target='_blank'
          rel='noreferrer'>
          <b>Robert Bish</b>
        </a>
      </p>
    </div>

    </>
  )
};

export default Footer;
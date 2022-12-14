import '.././styles/Footer.css';

function Footer () {
  return (
    <>
    <article className="certificates">
      <img className="certificate-image" alt="PASMA logo" src={require(".././images/logos/PASMA.jpeg")}/>
      <img className="certificate-image" alt="CSCS logo" src={require(".././images/logos/CSCS.png")}/>
      <img className="certificate-image" alt="Safe Contractor logo" src={require(".././images/logos/safe_contractor.jpeg")}/>
      <img className="certificate-image" alt="SSIP logo" src={require(".././images/logos/SSIP_accredited.jpeg")}/>
    </article>
    <div className="footer-text-container">
      <p className="footer-text">Revive Repair Ltd • Company number 9868638 • <a href="/">Terms & Conditions</a> • Design by <a href="/">Robert Bish</a></p>
    </div>

    </>
  )
};

export default Footer;
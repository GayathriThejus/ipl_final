// import React from "react";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   // NavItem,
//   // NavLink,
//   // Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";

// import iedclogo from '../assets/iedc.png';
// import ksumlogo from '../assets/ksum.png';
// import './Logo.css';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md="3">
//           <img src={ksumlogo} className="ksumlogo" alt="logo" />
//           <img src={iedclogo} className="iedclogo" alt="logo" />
//           </Col>
//           <Col md="2">
//           </Col>
//           <Col md="4">
//             <br />
//             <br />

//             <p classname="address" text-align= "center">
//             5th floor, CDAC Building, <br />
//             Technopark campus , <br />
//             Kariyavattom<br />
//             <br />
//             Phone : 0471-2700270 
            
//            </p>
//            <br/>
//            <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="mailto:iedckerala@startupmission.in"
//                 id="tooltip622135966"
//                 target="_blank"
//                 style={{ padding: '10px 40px' }}
//               >
                
//                 <i className="fab fa-google" />
                
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip622135966">
//               Mail to iedckerala@startupmission.in
//               </UncontrolledTooltip>
           
//           </Col>
              
//           <Col md="3">
//           <br/>
//             <br />
//             <h3 className="title">Connect with us</h3>
//             <div className="btn-wrapper profile">
              


//             {/* <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="mailto:iedckerala@startupmission.in"
//                 id="tooltip622135966"
//                 target="_blank"
//               >
                
//                 <i className="fab fa-google" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip622135966">
//               Mail to iedckerala@startupmission.in
//               </UncontrolledTooltip>
//               */}
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://twitter.com/startup_mission"
//                 id="tooltip622135962"
//                 target="_blank"
//               >
                
//                 <i className="fab fa-twitter" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip622135962">
//                 Follow us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://www.instagram.com/iedckerala/"
//                 id="tooltip622135962"
//                 target="_blank"
//               >
                
//                 <i className="fab fa-instagram" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip622135962">
//                 Follow us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://www.facebook.com/keralastartupmission"
//                 id="tooltip230450801"
//                 target="_blank"
//               >
//                 <i className="fab fa-facebook" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip230450801">
//                 Like us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://www.linkedin.com/company/kerala-startup-mission"
//                 id="tooltip318450378"
//                 target="_blank"
//               >
//                 <i className="fab fa-linkedin" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip318450378">
//                 Follow us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://t.me/iedckerala"
//                 id="tooltip318450378"
//                 target="_blank"
//               >
//                 <i className="fab fa-telegram" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip318450378">
//                 Follow us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="https://discord.com/invite/33QmxnSWFj"
//                 id="tooltip318450378"
//                 target="_blank"
//               >
//                 <i className="fab fa-discord" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip318450378">
//                 Follow us
//               </UncontrolledTooltip>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }


import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiDiscord, SiTelegram } from 'react-icons/si';
import iedclogo from '../assets/iedc.png';
import ksumlogo from '../assets/ksum.png';
import './Logo.css';
import './Footer.css'; // Import your custom CSS file for styling
// import { Row } from 'reactstrap';

const Footer = () => {
  return (
    <div>
    <footer className="custom-footer">
      
      <div className="logo-section">
        <img src={ksumlogo} className="ksumlogo" alt="KSUM Logo" />
        <img src={iedclogo} className="iedclogo" alt="IEDC Logo" />
      </div>

      
      <div className="contact-section">
        <p>5th floor, CDAC Building,</p>
        <p>Technopark Campus,</p>
        <p>Kariyavattom</p>
<br />
        <span style={{ display: 'inline-block', marginRight: '5px' }}><FaPhoneAlt /></span> 0471-2700270<br/>
        <span style={{ display: 'inline-block', marginRight: '5px' }}><FaEnvelope /></span> iedckerala@startupmission.in<br/>
   
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/keralastartupmission"><FaFacebookF /></a> 
        <a href="https://www.instagram.com/iedckerala/"><FaInstagram /></a> 
        <a href="https://www.linkedin.com/company/kerala-startup-mission"><FaLinkedinIn /></a> 
        <a href="https://twitter.com/startup_mission"><FaTwitter /></a> 
        <a href="https://discord.com/invite/33QmxnSWFj"><SiDiscord /></a> 
        <a href="https://t.me/iedckerala"><SiTelegram /></a> 


      </div>
{/* <div>
<p className="copyright" style={{ textAlign: 'center' }}>Copyright © 2024 Kerala Startup Mission. All Rights Reserved.</p>


</div> */}
    </footer>
    <div style={{textAlign: "center"}}>
    <small style={{color: "white"}}>Copyright © 2024 Kerala Startup Mission. All Rights Reserved.</small>
  </div>
  </div>
  );
}

export default Footer;

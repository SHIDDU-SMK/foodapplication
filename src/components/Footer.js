import React from 'react';

// import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
  
        return (
        <div className="footerbackground" id="footer">
          <footer className="card-body footer-text">
          <div className="row" id="contact">
                <div className="col-lg-4">
                 
                    <p className="card-text footertextcolor">
                      <h2>About us</h2>
                      Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.
                      </p>
                      <h6 className="footertextcolor">Monday to Saturday: 9.00 am to 9.00 pm</h6>
                      <h6 className="footertextcolor">Sunday: 10.00 am to 6.00 pm</h6>
                </div>  
                <div className="col-lg-2">
                  <h4 id="contact" className=""><b>Quick Links</b></h4>
                  <span className="">
                      <ul style={{ padding: 0 }}>
                          <li  >
                            <a   href="/" className="footertextcolor">Need help? Contact us</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Our latest News</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >About us page</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Table booking</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Fast delivery</a>
                          </li>
                          
                      </ul>
                  </span>
              </div>
              <div className="col-lg-2">
                  <h4 id="contact" className="card-title"><b>Recepies</b></h4>
                  <span className="card-text">
                      <ul style={{ padding: 0 }}>
                          <li className="" >
                            <a   href="/templete-pizzini" className="footertextcolor" >Pizza Bisciut</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Pizza Margeritta</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Pizza Prosciutto</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Pizza Low Carb </a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >Pizza Del Sole</a>
                          </li>
                         
                      </ul>
                  </span>
              </div>
              <div className="col-lg-2">
                  <h4 id="contact" className="card-title"><b>Contact us</b></h4>
                  <span className="">
                      <ul style={{ padding: 0 }}>
                          <li className="" >
                            <a   href="/" className="footertextcolor" >(+40) 74 0920 2288</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor"  >office@example.com</a>
                          </li>
                          <li>
                            <a href="/" className="footertextcolor" >New York 11673</a>
                          </li>
                    
                      </ul>
                  </span>
              </div>                       
          </div>
          <hr className="featurette-divider"/>
        </footer>
      </div>
         
        );
    }
  
  export default Footer;

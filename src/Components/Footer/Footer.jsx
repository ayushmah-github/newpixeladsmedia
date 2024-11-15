import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <><div class="container">
          <div class="about">
              <h2>
                  About Us
              </h2>
              <img alt="Company Logo" height="100" src="https://storage.googleapis.com/a1aa/image/7X8mcQCcRnYyCh2HYgrQ5TSEu6hiqnibx2UI9CeXMDrmIc2JA.jpg" width="100" />
              <p>
                  we want to be extension of client’s marketing team, not just a month to month service provider. We strive to deliver expert support and improvisation strategies to all our clients to optimize and enhance brand recognition in the market
              </p>
          </div>
          <div class="contact">
              <h2>
                  Contact Info
              </h2>
              <p>
                  WEEBEE TECHNOLOGIES AND MARKETING SOLUTIONS Cheloor Citadel, 7, 7A- 37/2241–OLD 388/18, Punkunnam, Thrissur, Kerala 680002
              </p>
              <p>
                  jtj@weebee.co.in
              </p>
              <p>
                  +917994111102
              </p>
          </div>
      </div><div class="footer">
              <p>
                  Copyright © 2021. All Rights Reserved.
              </p>
              <div class="social-icons">
                  <a href="#">
                      <i class="fab fa-facebook">
                      </i>
                  </a>
                  <a href="#">
                      <i class="fab fa-instagram">
                      </i>
                  </a>
                  <a href="#">
                      <i class="fab fa-linkedin">
                      </i>
                  </a>
              </div>
          </div></>
  )
}
export default Footer
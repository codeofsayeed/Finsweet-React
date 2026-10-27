import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-logo">finsweet</h2>
            <p>&copy; Copyright Finsweet 2026</p>
            <p><a href="tel:+14805550103">(480) 555-0103</a></p>
            <p>4517 Washington Ave.</p>
            <p><a href="mailto:finsweet@example.com">finsweet@example.com</a></p>
          </div>

          <div className="footer-section">
            <h3>Quicklinks</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-section subscribe">
            <h3>Subscribe to get latest updates and news</h3>
            <form>
              <input type="email" placeholder="Yourmail@gmail.com" required aria-label="Email Address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

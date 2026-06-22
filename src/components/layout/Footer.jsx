import { Link } from 'react-router-dom';
import { servicesLinks } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="cstm_footer">
      <div className="container">
        <div className="footer-links p-relative">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 col-12">
              <div className="cstm_footer_block mb-30">
                <h4 className="cstm_footer_title mb-30">Quick Links</h4>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/tracking">Tracking</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12">
              <div className="cstm_footer_block mb-30">
                <h4 className="cstm_footer_title mb-30">Our Services</h4>
                <nav>
                  <ul>
                    {servicesLinks.map((item) => (
                      <li key={item.path}><Link to={item.path}>{item.label}</Link></li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12">
              <div className="cstm_footer_block mb-30">
                <h4 className="cstm_footer_title mb-30">Resources</h4>
                <nav>
                  <ul>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/documents">Documents</Link></li>
                    <li><Link to="/prohibited-goods">Prohibited Goods</Link></li>
                    <li><Link to="/pickup-request">Pickup Request</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="cstm_footer_block mb-30">
                <h4 className="cstm_footer_title mb-30">Legal Policies</h4>
                <nav>
                  <ul>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                    <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12">
              <div className="cstm_footer_block mb-30">
                <h4 className="cstm_footer_title mb-30">Contact Us</h4>
                <p className="mb-1">
                  G1-2, Arun Complex, Opp Sheetal Law House, Near C U Shah College, Near Income Tax Cross Road,
                  Ashram Rd, Usmanpura, Ahmedabad, Gujarat 380009
                </p>
                <p className="mb-2"><i className="fas fa-envelope mr-2" /> <a href="mailto:jdintl.amd@gmail.com">jdintl.amd@gmail.com</a></p>
                <p className="mb-20"><i className="fas fa-phone-volume mr-2" /> <a href="tel:+919586226000">+91 95862 26000</a></p>
                <div className="cstm_footer_social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/JDICourier/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/j_d_international_courier" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                    </li>
                    <li>
                      <a href="https://wa.me/919586226000" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <p>© {new Date().getFullYear()} JD International Courier</p>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <p>Developed by <a href="https://itdgrowthlabs.com/" target="_blank" rel="noreferrer">ITD GrowthLabs</a></p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

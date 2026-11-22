import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo-text">
              <span className="footer__logo-main">Hyderabad Crop Science</span>
              <span className="footer__logo-sub">Pvt. Ltd.</span>
            </div>
            <p className="footer__tagline">Nurturing Agriculture. Empowering Farmers. Building Tomorrow.</p>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
              <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['About Us', '/about'], ['Products', '/products'], ['Research & Innovation', '/research'],
                ['Gallery', '/gallery'], ['Contact', '/contact'],
              ].map(([label, path]) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <ul>
              {[
                ['Insecticides', 'insecticides'], ['Fungicides', 'fungicides'],
                ['Herbicides', 'herbicides'], ['Plant Growth Regulators', 'pgr'],
              ].map(([label, category]) => (
                <li key={category}><Link to={`/products?category=${category}`}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul className="footer__contact">
              <li><MapPin size={15} /><span>452/2, Shiv Shakti Apartment, Satya Nagar, Udhna, Surat, Gujarat – 394210</span></li>
              <li><Phone size={15} /><a href="tel:8258808080">82588 08080</a></li>
              <li><Mail size={15} /><a href="mailto:hyderabadcropscience@gmail.com">hyderabadcropscience@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Hyderabad Crop Science Pvt. Ltd. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

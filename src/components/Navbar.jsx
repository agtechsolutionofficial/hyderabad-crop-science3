import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { navLinks } from '../data/navigation';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span>Monday – Saturday · 9:30 am – 6:00 pm</span>
            <span><Phone size={12} /> 82588 08080</span>
            <span><Mail size={12} /> hyderabadcropscience@gmail.com</span>
          </div>
          <div className="topbar__right">
            <span>Serving Indian farmers since 2014</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/logo/website-logo.webp" alt="Hyderabad Crop Science Pvt. Ltd." />
          </Link>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.path} className={`navbar__item ${link.children ? 'navbar__item--has-drop' : ''}`}
                onMouseEnter={() => link.children && setActiveDropdown(link.path)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <NavLink to={link.path} className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
                  {link.label} {link.children && <ChevronDown size={13} />}
                </NavLink>
                {link.children && activeDropdown === link.path && (
                  <ul className="navbar__dropdown">
                    {link.children.map(child => (
                      <li key={child.path}>
                        <Link to={child.path} className="navbar__drop-link">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <div key={link.path}>
              <NavLink to={link.path} className="mobile-menu__link" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
              {link.children && link.children.map(child => (
                <Link key={child.path} to={child.path} className="mobile-menu__child" onClick={() => setOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

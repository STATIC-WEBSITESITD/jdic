import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from '../ui/AppLink';
import {
  loginLinks,
  mainNavLinks,
  resourcesLinks,
  servicesLinks,
} from '../../data/navigation';

function closeMobileNav(setMobileNavOpen) {
  setMobileNavOpen(false);
}

function toggleMobileNav(setMobileNavOpen) {
  setMobileNavOpen((open) => !open);
}

function ActiveNavItem({ to, children, external, onClick, className }) {
  const { pathname } = useLocation();
  const isActive = !external && pathname === to;
  const classes = [className, isActive ? 'active' : ''].filter(Boolean).join(' ') || undefined;
  return (
    <NavItem
      to={to}
      external={external}
      className={classes}
      onClick={onClick}
    >
      {children}
    </NavItem>
  );
}

function DropdownTrigger({ children }) {
  return (
    <a
      href="javascript:void(0)"
      role="button"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
}

function MobileDropdown({ id, title, icon, openId, onToggle, children }) {
  const isOpen = openId === id;

  return (
    <li className={`nav__list-item nav__list-dropdown mobile-nav-item${isOpen ? ' open' : ''}`}>
      <a
        href="#"
        className="mobile-nav-link mobile-nav-toggle"
        role="button"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault();
          onToggle(isOpen ? null : id);
        }}
      >
        <span className="mobile-nav-link__label">
          {icon ? <i className={`fas ${icon} mobile-nav-link__icon`} aria-hidden="true" /> : null}
          {title}
        </span>
        <i className={`fas fa-chevron-down mobile-nav-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true" />
      </a>
      <ul className="mobile-nav-submenu">{children}</ul>
    </li>
  );
}

function MobileNavItem({ to, icon, children, onClick }) {
  return (
    <li className="nav__list-item mobile-nav-item">
      <ActiveNavItem to={to} className="mobile-nav-link" onClick={onClick}>
        <span className="mobile-nav-link__label">
          {icon ? <i className={`fas ${icon} mobile-nav-link__icon`} aria-hidden="true" /> : null}
          {children}
        </span>
      </ActiveNavItem>
    </li>
  );
}

export default function Header() {
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('nav-active', mobileNavOpen);
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';

    return () => {
      document.body.classList.remove('nav-active');
      document.body.style.overflow = '';
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <div className="header-top nav-mobile">
        <div className="container">
          <div className="logo">
            <NavItem to="/">
              <img src="/assets/img/logo.png" className="logo-light" alt="JD International Courier" />
              <img src="/assets/img/logo.png" className="logo-dark" alt="JD International Courier" />
            </NavItem>
          </div>
          <div
            className="menu-icon"
            role="button"
            tabIndex={0}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => toggleMobileNav(setMobileNavOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileNav(setMobileNavOpen);
              }
            }}
          >
            <div className="icon-m">
              <span className="menu-icon__line menu-icon__line-left" />
              <span className="menu-icon__line" />
              <span className="menu-icon__line menu-icon__line-right" />
            </div>
          </div>
          <div className="nav">
            <div className="inner">
              <div className="logo mobile-nav-overlay-logo">
                <NavItem to="/" onClick={() => closeMobileNav(setMobileNavOpen)}>
                  <img src="/assets/img/logo.png" alt="JD International Courier" />
                </NavItem>
              </div>
              <div className="nav__content">
                <ul className="nav__list mobile-nav-list">
                  <MobileNavItem to="/" icon="fa-home" onClick={() => closeMobileNav(setMobileNavOpen)}>
                    Home
                  </MobileNavItem>
                  <MobileNavItem to="/about" icon="fa-info-circle" onClick={() => closeMobileNav(setMobileNavOpen)}>
                    About Us
                  </MobileNavItem>
                  <MobileDropdown
                    id="services"
                    title="Services"
                    icon="fa-truck"
                    openId={openMobileDropdown}
                    onToggle={setOpenMobileDropdown}
                  >
                    {servicesLinks.map((item) => (
                      <li key={item.path}>
                        <ActiveNavItem to={item.path} className="mobile-nav-sublink" onClick={() => closeMobileNav(setMobileNavOpen)}>
                          {item.label}
                        </ActiveNavItem>
                      </li>
                    ))}
                  </MobileDropdown>
                  <MobileNavItem to="/tracking" icon="fa-map-marker-alt" onClick={() => closeMobileNav(setMobileNavOpen)}>
                    Tracking
                  </MobileNavItem>
                  <MobileDropdown
                    id="resources"
                    title="Resources"
                    icon="fa-book"
                    openId={openMobileDropdown}
                    onToggle={setOpenMobileDropdown}
                  >
                    {resourcesLinks.map((item) => (
                      <li key={item.path}>
                        <ActiveNavItem to={item.path} className="mobile-nav-sublink" onClick={() => closeMobileNav(setMobileNavOpen)}>
                          {item.label}
                        </ActiveNavItem>
                      </li>
                    ))}
                  </MobileDropdown>
                  <MobileNavItem to="/careers" icon="fa-briefcase" onClick={() => closeMobileNav(setMobileNavOpen)}>
                    Careers
                  </MobileNavItem>
                  <MobileNavItem to="/contact" icon="fa-envelope" onClick={() => closeMobileNav(setMobileNavOpen)}>
                    Contact Us
                  </MobileNavItem>
                  <MobileDropdown
                    id="login"
                    title="Login"
                    icon="fa-user-circle"
                    openId={openMobileDropdown}
                    onToggle={setOpenMobileDropdown}
                  >
                    {loginLinks.map((item) => (
                      <li key={item.path}>
                        <NavItem to={item.path} external className="mobile-nav-sublink" onClick={() => closeMobileNav(setMobileNavOpen)}>
                          {item.label}
                        </NavItem>
                      </li>
                    ))}
                  </MobileDropdown>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="subheader text-white">
          <div className="container d-none d-xl-block">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="subheader-content mb-0">
                  <a href="mailto:jdintl.amd@gmail.com" className="text-white">
                    <i className="fas fa-envelope" aria-hidden="true" /> jdintl.amd@gmail.com
                  </a>
                  <a href="https://wa.me/919586226000" className="text-white" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp" aria-hidden="true" /> +91 95862 26000
                  </a>
                </p>
              </div>
              <div className="col-md-6 text-md-right">
                <p className="subheader-content subheader-content--right mb-0">
                  {loginLinks.map((item) => (
                    <NavItem key={item.path} to={item.path} external className="text-white">
                      <i className="fas fa-user" aria-hidden="true" /> {item.label}
                    </NavItem>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-header">
          <div className="container">
            <div className="inner-header">
              <div className="main-logo">
                <NavItem to="/">
                  <img src="/assets/img/logo.png" alt="JD International Courier" />
                </NavItem>
              </div>
            </div>
            <nav className="accent-menu main-navigation">
              <ul>
                <li>
                  <ActiveNavItem to="/">
                    Home
                  </ActiveNavItem>
                </li>
                {mainNavLinks.slice(0, 1).map((item) => (
                  <li key={item.path}>
                    <ActiveNavItem to={item.path}>{item.label}</ActiveNavItem>
                  </li>
                ))}
                <li className="custom-drop-down">
                  <DropdownTrigger>Services</DropdownTrigger>
                  <ul>
                    {servicesLinks.map((item) => (
                      <li key={item.path}>
                        <ActiveNavItem to={item.path}>{item.label}</ActiveNavItem>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ActiveNavItem to="/tracking">Tracking</ActiveNavItem>
                </li>
                <li className="custom-drop-down">
                  <DropdownTrigger>Resources</DropdownTrigger>
                  <ul>
                    {resourcesLinks.map((item) => (
                      <li key={item.path}>
                        <ActiveNavItem to={item.path}>{item.label}</ActiveNavItem>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ActiveNavItem to="/careers">Careers</ActiveNavItem>
                </li>
                <li>
                  <ActiveNavItem to="/contact">Contact Us</ActiveNavItem>
                </li>
                {/* <li className="custom-drop-down">
                <DropdownTrigger>Login</DropdownTrigger>
                <ul>
                  {loginLinks.map((item) => (
                    <li key={item.path}>
                      <NavItem to={item.path} external>
                        {item.label}
                      </NavItem>
                    </li>
                  ))}
                </ul>
              </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

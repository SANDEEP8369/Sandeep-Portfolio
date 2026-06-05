import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects',   label: 'Projects' },
  { to: '/skills',     label: 'Skills' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5vw',
      background: scrolled
        ? 'rgba(5, 5, 15, 0.92)'
        : 'rgba(5, 5, 15, 0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,212,170,0.1)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.3rem',
          background: 'linear-gradient(90deg, #00D4AA, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        }}>
          Sandeep.
        </span>
      </NavLink>

      {/* Desktop Links */}
      <div style={{
        display: 'flex',
        gap: '2.2rem',
        alignItems: 'center',
      }} className="desktop-nav">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8rem',
              fontWeight: isActive ? 600 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isActive ? '#00D4AA' : 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              position: 'relative',
              paddingBottom: '2px',
            })}
          >
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#00D4AA',
                    borderRadius: 1,
                  }} />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Hamburger (mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: 22,
            height: '1.5px',
            background: menuOpen ? '#00D4AA' : 'rgba(255,255,255,0.7)',
            borderRadius: 1,
            transform: menuOpen
              ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                : 'scaleX(0)'
              : 'none',
            transition: 'transform 0.25s, background 0.2s',
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 60,
          left: 0,
          right: 0,
          background: 'rgba(5,5,15,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,212,170,0.12)',
          padding: '1.5rem 5vw 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#00D4AA' : 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

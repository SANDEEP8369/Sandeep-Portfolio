import { NavLink } from 'react-router-dom'
import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 5vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.1rem',
          background: 'linear-gradient(90deg, #00D4AA, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>SV</span>
      </NavLink>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.72rem',
        color: 'rgba(255,255,255,0.22)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        © {new Date().getFullYear()} Sandeep Verma · Java Full Stack Developer · Mumbai
      </p>

      <div style={{ display: 'flex', gap: '1.2rem' }}>
        {[
          { label: 'Email', href: `mailto:${personal.email}` },
          { label: 'LinkedIn', href: personal.linkedin },
          { label: 'Phone', href: `tel:${personal.phone.replace(/\s/g, '')}` },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#00D4AA'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}

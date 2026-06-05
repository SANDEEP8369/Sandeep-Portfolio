import PageWrapper from '../components/PageWrapper'
import { personal, skills, education, certifications } from '../data/resume'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: '☕', label: 'Core Java', sub: 'Advanced Java Expert' },
  { icon: '🌱', label: 'Spring Boot', sub: 'Microservices & MVC' },
  { icon: '🐇', label: 'RabbitMQ', sub: 'Event-Driven Systems' },
  { icon: '🏛️', label: 'Govt APIs', sub: 'GSTN · TRACES · IRP' },
  { icon: '🗄️', label: 'Databases', sub: 'MySQL · PG · Oracle' },
  { icon: '⚛️', label: 'React.js', sub: 'Vite · Frontend' },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="section-wrapper">

        {/* Hero row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '6rem',
        }}>
          {/* Left text */}
          <div>
            <p className="section-label">About Me</p>
            <h1 className="section-heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', marginBottom: '2rem' }}>
              Crafting Scalable<br />
              <span className="gradient-text-purple">Backend Systems</span>
            </h1>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}>
              {personal.summary}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/experience" className="btn-primary">My Experience</Link>
              <Link to="/contact" className="btn-ghost">Say Hello</Link>
            </div>
          </div>

          {/* Right grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(0,212,170,0.08)',
            border: '1px solid rgba(0,212,170,0.1)',
            borderRadius: 14,
            overflow: 'hidden',
          }}>
            {highlights.map(item => (
              <div
                key={item.label}
                className="highlight-cell"
                style={{
                  padding: '1.6rem',
                  background: 'rgba(5,5,15,0.95)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,170,0.07)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(5,5,15,0.95)'}
              >
                <span style={{ fontSize: '1.7rem' }}>{item.icon}</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem', fontWeight: 600, color: '#fff',
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.38)',
                  letterSpacing: '0.05em',
                }}>
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certification */}
        <div>
          <p className="section-label">Background</p>
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '2.5rem' }}>
            Education &amp; Certifications
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {education.map(ed => (
              <div key={ed.degree} className="card">
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${ed.color}1a`,
                  border: `1px solid ${ed.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', marginBottom: '1.2rem',
                }}>
                  🎓
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700, color: '#fff',
                  marginBottom: '0.5rem',
                }}>
                  {ed.degree}
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem', color: ed.color, marginBottom: '0.3rem',
                }}>
                  {ed.institution}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
                }}>
                  {ed.university}
                </p>
              </div>
            ))}

            {certifications.map(cert => (
              <div key={cert.title} className="card">
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${cert.color}1a`,
                  border: `1px solid ${cert.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', marginBottom: '1.2rem',
                }}>
                  🏆
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700, color: '#fff',
                  marginBottom: '0.5rem',
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem', color: cert.color, marginBottom: '0.5rem',
                }}>
                  {cert.issuer}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.65,
                }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

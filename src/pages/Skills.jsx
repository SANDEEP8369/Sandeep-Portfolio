import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { skills, education, certifications } from '../data/resume'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <PageWrapper>
      <section className="section-wrapper">

        <p className="section-label">Tech Stack</p>
        <h1 className="section-heading" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          marginBottom: '1rem',
        }}>
          Skills &amp; Tools
        </h1>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '4rem',
          maxWidth: 500,
        }}>
          Technologies I use day-to-day to build reliable, scalable backend systems.
        </p>

        {/* Skill cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.2rem',
          marginBottom: '5rem',
        }}>
          {skills.map(skill => {
            const isActive = activeCategory === skill.category
            return (
              <div
                key={skill.category}
                onClick={() => setActiveCategory(isActive ? null : skill.category)}
                style={{
                  background: isActive ? `${skill.color}0d` : 'rgba(255,255,255,0.025)',
                  border: `1px solid ${isActive ? skill.color + '55' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 12,
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = `${skill.color}40`
                    e.currentTarget.style.background = `${skill.color}08`
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                  }
                }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '1rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>{skill.icon}</span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: skill.color,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}>
                      {skill.category}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '0.72rem',
                    color: isActive ? skill.color : 'rgba(255,255,255,0.25)',
                    transition: 'color 0.2s',
                  }}>
                    {isActive ? '▲' : '▼'}
                  </span>
                </div>

                {/* Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {skill.items.map(item => (
                    <span
                      key={item}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.75rem',
                        color: isActive ? skill.color : 'rgba(255,255,255,0.6)',
                        background: isActive ? `${skill.color}14` : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${isActive ? skill.color + '35' : 'rgba(255,255,255,0.08)'}`,
                        padding: '0.28rem 0.72rem',
                        borderRadius: 30,
                        transition: 'all 0.25s',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Education + Certification */}
        <div>
          <p className="section-label">Background</p>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            marginBottom: '2.5rem',
          }}>
            Education &amp; Certification
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {education.map(ed => (
              <div key={ed.degree} className="card" style={{ borderRadius: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${ed.color}18`,
                  border: `1px solid ${ed.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: '1.2rem',
                }}>
                  🎓
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem',
                }}>
                  {ed.degree}
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.86rem', color: ed.color, marginBottom: '0.3rem',
                }}>
                  {ed.institution}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.78rem', color: 'rgba(255,255,255,0.33)',
                }}>
                  {ed.university}
                </p>
              </div>
            ))}

            {certifications.map(cert => (
              <div key={cert.title} className="card" style={{ borderRadius: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: '1.2rem',
                }}>
                  🏆
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem',
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.86rem', color: cert.color, marginBottom: '0.5rem',
                }}>
                  {cert.issuer}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65,
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

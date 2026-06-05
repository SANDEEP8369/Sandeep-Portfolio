import PageWrapper from '../components/PageWrapper'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <PageWrapper>
      <section className="section-wrapper">

        <p className="section-label">Work History</p>
        <h1 className="section-heading" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          marginBottom: '1rem',
        }}>
          Where I've Worked
        </h1>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '5rem',
          maxWidth: 500,
        }}>
          Professional journey building enterprise FinTech & compliance platforms.
        </p>

        {experience.map((job, idx) => (
          <div key={job.id} style={{ display: 'flex', gap: '3rem', marginBottom: '4rem' }}>

            {/* Timeline column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              paddingTop: '0.25rem',
            }}>
              <div style={{
                width: 14, height: 14,
                borderRadius: '50%',
                background: job.color,
                boxShadow: `0 0 16px ${job.color}88`,
                flexShrink: 0,
              }} />
              {idx < experience.length - 1 && (
                <div style={{
                  width: 1,
                  flex: 1,
                  minHeight: 60,
                  background: `linear-gradient(to bottom, ${job.color}88, transparent)`,
                  marginTop: 6,
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '0.6rem',
              }}>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.5px',
                }}>
                  {job.role}
                </h2>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  color: job.color,
                  background: `${job.color}18`,
                  border: `1px solid ${job.color}30`,
                  padding: '0.28rem 0.9rem',
                  borderRadius: 30,
                  alignSelf: 'center',
                }}>
                  {job.period}
                </span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.28rem 0.8rem',
                  borderRadius: 30,
                  alignSelf: 'center',
                }}>
                  {job.type}
                </span>
              </div>

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '2rem',
              }}>
                {job.company} · {job.location}
              </p>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {job.bullets.map((bullet, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 5, height: 5,
                      borderRadius: '50%',
                      background: job.color,
                      flexShrink: 0,
                      marginTop: '0.58rem',
                    }} />
                    <p style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {idx < experience.length - 1 && (
                <div style={{
                  marginTop: '3rem',
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                }} />
              )}
            </div>
          </div>
        ))}
      </section>
    </PageWrapper>
  )
}

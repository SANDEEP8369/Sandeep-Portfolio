import { useEffect, useRef } from 'react'

export default function PageWrapper({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.opacity = '0'
    ref.current.style.transform = 'translateY(16px)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      })
    })
  }, [])

  return (
    <div ref={ref} style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {children}
    </div>
  )
}

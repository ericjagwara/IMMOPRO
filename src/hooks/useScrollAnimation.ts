import { useEffect, useRef } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = ref.current?.querySelectorAll('.animate-on-scroll')
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('is-visible')
            }, i * 150)
          })
        }
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Introduction() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="introduction" className="min-h-screen flex items-center py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Introducción</h2>
          </div>
          <Card className={`mx-[15px] ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground text-base">
                El presente informe expone los resultados del análisis de campos electromagnéticos (EMF) en el colegio,
                realizado dentro del programa Emzon. Se identificaron áreas con alta exposición a EMF y se proponen
                soluciones para reducir sus efectos en la comunidad educativa.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Results() {
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

  const criticalAreas = [
    "Aula 5°A (cercanía a transformador)",
    "Sala de informática (Wi-Fi potente y múltiples dispositivos)",
  ]

  const safeAreas = ["Patio (mínima exposición a EMF)"]

  return (
    <section
      ref={sectionRef}
      id="results"
      className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 bg-muted/30"
    >
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-10 sm:mb-12 md:mb-16 text-center px-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance leading-tight">
              Resultados de las Mediciones
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground text-pretty">
              Análisis detallado de las áreas evaluadas
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card
              className={`border-destructive/50 shadow-lg ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-destructive text-base sm:text-lg">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="leading-tight">Áreas Críticas Detectadas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 sm:space-y-4">
                  {criticalAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                      <span className="text-sm sm:text-base leading-relaxed text-pretty">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`border-accent/50 shadow-lg ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-accent text-base sm:text-lg">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="leading-tight">Áreas Seguras</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 sm:space-y-4">
                  {safeAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm sm:text-base leading-relaxed text-pretty">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

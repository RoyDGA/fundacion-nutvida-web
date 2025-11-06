"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Solutions() {
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

  const solutions = [
    "Reubicar escritorios y pupitres lejos de fuentes EMF (como tableros eléctricos)",
    "Reducir la potencia del Wi-Fi en horarios de clase",
    "Desconectar dispositivos electrónicos cuando no se usen",
    "Aplicar pintura anti-EMF en áreas con exposición alta",
    "Usar cableado blindado en futuras remodelaciones",
  ]

  const benefits = [
    "Menor fatiga y estrés en estudiantes y docentes",
    "Mejor calidad del sueño y concentración en los alumnos",
    "Espacios más saludables y alineados con normativas internacionales",
  ]

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="min-h-screen flex items-center py-12 sm:py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-8 sm:mb-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Propuesta de Soluciones
            </h2>
          </div>

          <Card className={`mb-4 sm:mb-6 ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <TrendingDown className="h-5 w-5 flex-shrink-0 text-primary" />
                Medidas de Mitigación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`border-accent/50 bg-accent/5 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent text-base sm:text-lg">
                Beneficios Esperados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

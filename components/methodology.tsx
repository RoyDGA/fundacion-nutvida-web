"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Microscope } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Methodology() {
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

  const details = [
    {
      icon: Calendar,
      label: "Fecha del estudio",
      value: "[Día/Mes/Año]",
    },
    {
      icon: MapPin,
      label: "Ubicaciones evaluadas",
      value: "Aulas, oficinas, pasillos, patios",
    },
    {
      icon: Microscope,
      label: "Herramienta utilizada",
      value: "Medidor de EMF TriField TF2",
    },
  ]

  return (
    <section ref={sectionRef} id="methodology" className="min-h-screen flex items-center py-12 sm:py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-8 sm:mb-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">Metodología</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <Card
                  key={index}
                  className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="mb-1 text-sm font-medium text-muted-foreground">{detail.label}</p>
                    <p className="text-sm sm:text-base font-semibold">{detail.value}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <Card className={`mt-4 sm:mt-6 ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Las mediciones se realizaron en diferentes horarios para evaluar variaciones en la exposición.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

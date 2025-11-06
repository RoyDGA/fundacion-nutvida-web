"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, BarChart3, Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Objectives() {
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

  const objectives = [
    {
      icon: BarChart3,
      title: "Medir la exposición a EMF",
      description: "En diferentes áreas del colegio para obtener datos precisos",
    },
    {
      icon: Target,
      title: "Comparar con referencias",
      description: "Los valores obtenidos con estándares internacionales",
    },
    {
      icon: Lightbulb,
      title: "Proponer estrategias",
      description: "De mitigación para mejorar la calidad del ambiente escolar",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="objectives"
      className="min-h-screen flex items-center py-12 sm:py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-8 sm:mb-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Objetivo del Estudio
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <Card
                  key={index}
                  className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-base sm:text-lg font-semibold">{objective.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{objective.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

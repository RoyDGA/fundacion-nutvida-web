"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Conclusion() {
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
    <section ref={sectionRef} id="conclusion" className="min-h-screen flex items-center py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Conclusión y Recomendaciones</h2>
          </div>
          <Card
            className={`border-primary mx-[15px] ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground text-base">
                El análisis demuestra que algunas zonas del colegio presentan niveles elevados de EMF, lo que puede
                afectar el bienestar de la comunidad educativa. Se recomienda la implementación gradual de medidas de
                mitigación y un seguimiento periódico de los niveles de exposición para garantizar un ambiente escolar
                más saludable y seguro.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

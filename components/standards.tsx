"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Standards() {
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
    <section ref={sectionRef} id="standards" className="min-h-screen flex items-center py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-10 sm:mb-12 md:mb-16 text-center px-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance leading-tight">
              Comparación con Estándares Internacionales
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground text-pretty">
              Referencias científicas y normativas aplicables
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <Card className={`shadow-lg ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg leading-tight">BioInitiative Report (2012)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                  Sugiere no superar <strong className="text-foreground">1 mG</strong> en espacios sensibles y{" "}
                  <strong className="text-foreground">0.1 mW/m²</strong> en áreas infantiles.
                </p>
              </CardContent>
            </Card>

            <Card className={`shadow-lg ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg leading-tight">ICNIRP (OMS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                  Permite valores más altos, pero no considera efectos biológicos a largo plazo.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-primary shadow-lg ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}
            >
              <CardContent className="pt-5 sm:pt-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold">
                    !
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold mb-2 text-sm sm:text-base">Conclusión</p>
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                      Algunas zonas del colegio superan los niveles recomendados por estudios independientes, lo que
                      justifica la implementación de medidas de reducción de EMF.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

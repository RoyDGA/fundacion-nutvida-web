"use client"

import { useState } from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "introduction", label: "Introducción" },
  { id: "objectives", label: "Objetivos" },
  { id: "methodology", label: "Metodología" },
  { id: "results", label: "Resultados" },
  { id: "standards", label: "Estándares" },
  { id: "solutions", label: "Soluciones" },
  { id: "conclusion", label: "Conclusión" },
]

export function PageNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Image
              src="/images/design-mode/nutvida-removebg-preview.png"
              alt="Fundación Nutvida"
              width={120}
              height={60}
              className="sm:h-10 md:h-12 w-auto object-contain h-10"
            />
          </div>

          <ul className="hidden lg:flex items-center gap-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 rounded-md"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors active:scale-95">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] bg-gradient-to-br from-card to-card/95">
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between pb-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/design-mode/nutvida-removebg-preview.png"
                      alt="Fundación Nutvida"
                      width={80}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Navigation items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                    Navegación
                  </h2>
                  <ul className="flex flex-col gap-1">
                    {sections.map(({ id, label }, index) => (
                      <li
                        key={id}
                        style={{ animationDelay: `${index * 50}ms` }}
                        className="animate-in fade-in slide-in-from-right-4"
                      >
                        <button
                          onClick={() => handleClick(id)}
                          className="w-full text-left px-4 py-3.5 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-accent/80 transition-all duration-200 active:scale-[0.98] border border-transparent hover:border-border/50"
                        >
                          <span className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                              {index + 1}
                            </span>
                            {label}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

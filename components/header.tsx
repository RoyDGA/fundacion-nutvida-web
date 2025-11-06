import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <Image
            src="/images/design-mode/WhatsApp%20Image%202025-10-31%20at%209.56.40%20AM.jpeg"
            alt="Fundación Nutvida"
            width={120}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
          <Image
            src="/images/design-mode/WhatsApp%20Image%202025-10-31%20at%209.56.42%20AM.jpeg"
            alt="BIOEC - Bioeducación Cuántica"
            width={60}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
          <div className="hidden sm:block h-6 md:h-8 w-px bg-border" />
          <span className="hidden sm:block text-sm md:text-lg font-semibold text-primary">Programa Emzon</span>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#introduccion" className="text-muted-foreground hover:text-foreground transition-colors">
              Introducción
            </a>
            <a href="#objetivos" className="text-muted-foreground hover:text-foreground transition-colors">
              Objetivos
            </a>
            <a href="#resultados" className="text-muted-foreground hover:text-foreground transition-colors">
              Resultados
            </a>
            <a href="#soluciones" className="text-muted-foreground hover:text-foreground transition-colors">
              Soluciones
            </a>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#hero" className="text-lg font-medium hover:text-primary transition-colors">
                  Inicio
                </a>
                <a href="#introduccion" className="text-lg font-medium hover:text-primary transition-colors">
                  Introducción
                </a>
                <a href="#objetivos" className="text-lg font-medium hover:text-primary transition-colors">
                  Objetivos
                </a>
                <a href="#metodologia" className="text-lg font-medium hover:text-primary transition-colors">
                  Metodología
                </a>
                <a href="#resultados" className="text-lg font-medium hover:text-primary transition-colors">
                  Resultados
                </a>
                <a href="#estandares" className="text-lg font-medium hover:text-primary transition-colors">
                  Estándares
                </a>
                <a href="#soluciones" className="text-lg font-medium hover:text-primary transition-colors">
                  Soluciones
                </a>
                <a href="#conclusion" className="text-lg font-medium hover:text-primary transition-colors">
                  Conclusión
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

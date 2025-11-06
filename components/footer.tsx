import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">Programa Emzon</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Zonas Seguras, Mentes Libres - Análisis de Campos Electromagnéticos
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Programa Emzon. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

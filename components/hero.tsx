import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/images/design-mode/bioec-removebg-preview.png"
              alt="BIOEC - Bioeducación Cuántica"
              width={200}
              height={200}
              className="h-32 sm:h-40 md:h-48 w-auto object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            Programas BioEC y EMZON - Fundación Nutvida
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty px-2">
            Zonas Seguras, Mentes Libres
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <a
              href="#introduction"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Ver Informe Completo
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-primary/10 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-primary hover:bg-primary/20 transition-all duration-200 active:scale-[0.98]"
            >
              Soluciones Propuestas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

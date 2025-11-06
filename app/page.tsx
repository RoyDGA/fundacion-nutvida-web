import { PageNavigation } from "@/components/page-navigation"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { Objectives } from "@/components/objectives"
import { Methodology } from "@/components/methodology"
import { Results } from "@/components/results"
import { Standards } from "@/components/standards"
import { Solutions } from "@/components/solutions"
import { Conclusion } from "@/components/conclusion"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <PageNavigation />
      <main className="pt-20">
        <Hero />
        <Introduction />
        <Objectives />
        <Methodology />
        <Results />
        <Standards />
        <Solutions />
        <Conclusion />
      </main>
      <Footer />
    </div>
  )
}

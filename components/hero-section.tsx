import { Music2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://outsideleft.com/i/stars/14112022165902-Joji2.jpg"
          alt="Joji"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 text-center space-y-6 px-4">
        <div className="flex justify-center mb-6">
          <Music2 className="w-16 h-16 text-primary animate-pulse" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-balance bg-gradient-to-r from-red-600 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
          JOJI
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          Cantante · Letrista · Productor Musical
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

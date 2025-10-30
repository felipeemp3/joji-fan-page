import { Instagram, Twitter, Youtube, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black/50 backdrop-blur-sm mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">JOJI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Página oficial del artista con música, biografía y las últimas novedades.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.jojimusic.com/" className="hover:text-primary transition-colors">
                  Musica
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary transition-colors">
                  Dias de tour
                </a>
              </li>
              <li>
                <a href="https://jojistore.com/pages/contact-us" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/sushitrash"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/sushitrash"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/joji"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Joji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

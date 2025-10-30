import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface Album {
  id: string
  title: string
  year: string
  cover: string
  spotifyUrl: string
}

const albums: Album[] = [
  {
    id: "1",
    title: "Smithereens",
    year: "2022",
    cover: "https://i.scdn.co/image/ab67616d0000b273cdd1a8a427b3f81f4f4f4f7d",
    spotifyUrl: "https://open.spotify.com/intl-es/album/39VuC5rYQHAnR6xQwm1WDk?si=Chr9_NKCT1KYgi54G0_pEQ",
  },
  {
    id: "2",
    title: "Nectar",
    year: "2020",
    cover: "https://i.scdn.co/image/ab67616d00001e028da6404284573219a9b1e2f4",
    spotifyUrl: "https://open.spotify.com/intl-es/album/65edimIChzNNK8VGn56pIK?si=8--6TTyBS9ytgzu7Ca2TcA",
  },
];

export function AlbumsSidebar() {
  return (
    <aside className="space-y-6 sticky top-8">
      <h2 className="text-2xl font-bold tracking-tight">Discografia</h2>

      <div className="space-y-3">
        {albums.map((album) => (
          <Card
            key={album.id}
            className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all hover:scale-[1.02]"
          >
            <a href={album.spotifyUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-base">{album.title}</h3>
                <p className="text-sm text-muted-foreground">{album.year}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </aside>
  )
}


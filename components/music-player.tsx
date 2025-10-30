"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface Track {
  id: string
  name: string
  album: string
  audioUrl: string
  albumArt: string
}

const localTracks: Track[] = [
  {
    id: "1",
    name: "Glimpse of Us",
    album: "Smithereens",
    audioUrl: "/audio/glimpse-of-us.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273cdd1a8a427b3f81f4f4f4f7d",
  },
  {
    id: "3",
    name: "Sanctuary",
    album: "Nectar",
    audioUrl: "/audio/sanctuary.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d00001e028da6404284573219a9b1e2f4",
  },
  {
    id: "4",
    name: "Slow Dancing in the Dark",
    album: "BALLADS 1",
    audioUrl: "/audio/slow-dancing.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2",
  },
  {
    id: "5",
    name: "Run",
    album: "Nectar",
    audioUrl: "/audio/run.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d00001e028da6404284573219a9b1e2f4",
  },
  {
    id: "6",
    name: "YEAH RIGHT",
    album: "BALLADS 1",
    audioUrl: "/audio/yeah-right.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2",
  },
  {
    id: "8",
    name: "Will He",
    album: "In Tongues",
    audioUrl: "/audio/will-he.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
  },
]

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const handlePlayPause = (track: Track) => {
    if (currentTrack === track.id) {
      audio?.pause()
      setCurrentTrack(null)
    } else {
      audio?.pause()
      const newAudio = new Audio(track.audioUrl)
      newAudio.play()
      newAudio.addEventListener("ended", () => setCurrentTrack(null))
      setAudio(newAudio)
      setCurrentTrack(track.id)
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold tracking-tight">Top Canciones</h2>

      <div className="space-y-3">
        {localTracks.map((track) => (
          <Card
            key={track.id}
            className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors"
          >
            <div className="flex items-center gap-4">
              <img
                src={track.albumArt || "/placeholder.svg"}
                alt={track.album}
                className="w-20 h-20 rounded-md object-cover"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg truncate">{track.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{track.album}</p>
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary shrink-0"
                onClick={() => handlePlayPause(track)}
              >
                {currentTrack === track.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
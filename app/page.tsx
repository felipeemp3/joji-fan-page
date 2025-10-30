import { HeroSection } from "@/components/hero-section"
import { BiographySection } from "@/components/biography-section"
import { MusicPlayer } from "@/components/music-player"
import { AlbumsSidebar } from "@/components/albums-sidebar"
import { Footer } from "@/components/footer"
import TopTracks from "@/components/top-tracks"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B0000] via-[#4A0000] to-black">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <BiographySection />
            <MusicPlayer />
          </div>

          <div className="lg:col-span-1">
            <AlbumsSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
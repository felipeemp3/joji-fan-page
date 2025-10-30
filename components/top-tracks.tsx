"use client";

import { useEffect, useState } from "react";

interface Track {
  id: string;
  name: string;
  preview_url: string | null;
  external_urls: { spotify: string };
}

export default function TopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/api/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data.tracks || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-black/30 rounded-2xl p-6 backdrop-blur-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Top Tracks de Joji</h2>
      <ul className="space-y-4">
        {tracks.map((track, i) => (
          <li
            key={track.id}
            className="flex items-center justify-between bg-white/5 hover:bg-white/10 p-3 rounded-lg transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-white/70">{i + 1}.</span>
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 font-medium"
              >
                {track.name}
              </a>
            </div>
            {track.preview_url && (
              <audio controls className="h-8">
                <source src={track.preview_url} type="audio/mpeg" />
              </audio>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

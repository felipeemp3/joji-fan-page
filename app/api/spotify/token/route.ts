import { NextResponse } from "next/server"

const CLIENT_ID = "2de6297e4ffe4e0cafe42cf5d445c80d"
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || ""

export async function GET() {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Error getting Spotify token:", error)
    return NextResponse.json({ error: "Failed to get token" }, { status: 500 })
  }
}

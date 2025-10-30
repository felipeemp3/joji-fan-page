import { NextResponse } from "next/server";

export async function GET() {
  try {
    // token de Spotify (usa tu endpoint local o un token directo)
    const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/token`);
    const tokenData = await tokenRes.json();

    const res = await fetch(
      "",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al obtener los top tracks" }, { status: 500 });
  }
}

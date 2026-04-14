import { UrlShortenerService } from "@/lib/services/urlShortenerService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {originalUrl} = await req.json();
        const shortenerService = new UrlShortenerService();
        const shortUrl = await shortenerService.shortenUrl(originalUrl);
        return NextResponse.json({shortUrl}, {status: 201});
    } catch (error) {
        console.error('Failed to shorten url:', error);
        return NextResponse.json({ error: 'Database unavailable' }, { status: 503 });
    }
}
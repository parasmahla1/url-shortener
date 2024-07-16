import { UrlShortenerService } from "@/lib/services/urlShortenerService";

import { NextResponse } from "next/server";

const fetchUrls = async () => {
    const shortenerService = new UrlShortenerService();
    const response = await shortenerService.getAllUrls();
    return response
}

export async function GET() {
    const urls = await fetchUrls();
    const response = NextResponse.json({urls})
    return response; 
}
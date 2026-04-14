import { UrlShortenerService } from "@/lib/services/urlShortenerService";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(url: string) {
    const urlService = new UrlShortenerService();
    const response = await urlService.getUrlByShortUrl(url);
    return response?.originalUrl;
}

export default async function urlRedirect({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const original = await fetchOriginalUrl(`urls/${id}`);
    if(original)
        redirect(original);
    redirect('/404');
    return null;
}
'use server'

import { UrlShortenerService } from "@/lib/services/urlShortenerService";
import { revalidatePath } from "next/cache";

const shortenUrl = async (formData: FormData) => {
    const originalUrl : string = formData.get('originalUrl') as string;
    if (!originalUrl?.trim()) {
        throw new Error('originalUrl is required');
    }

    console.log("Orignal URL Passed is ", originalUrl);
    const shortenerService = new UrlShortenerService();
    await shortenerService.shortenUrl(originalUrl.trim());
    revalidatePath('/urls');

}
export default shortenUrl
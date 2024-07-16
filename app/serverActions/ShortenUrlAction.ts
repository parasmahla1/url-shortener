'use server'

import { UrlShortenerService } from "@/lib/services/urlShortenerService";
import { revalidatePath } from "next/cache";

const shortenUrl = async (formData: FormData) => {
    const originalUrl : string = formData.get('originalUrl') as string;
    console.log("Orignal URL Passed is ", originalUrl);
    const shortenerService = new UrlShortenerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    revalidatePath('/urls');

}
export default shortenUrl
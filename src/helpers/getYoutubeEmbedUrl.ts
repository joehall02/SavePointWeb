/**
 * Get the YouTube embed URL from a given URL.
 * 
 * @param url - URL of a YouTube video
 * @returns 
 */
export const getYouTubeEmbedUrl = (url?: string): string => {
	// We're no stranger to parsed urls
	const parsedUrl = new URL(url ?? 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');

	// 1. Extract video id
	const videoId = parsedUrl.searchParams.get('v');

	// Return fallback if videoId is falsy
	if (!videoId) return parsedUrl.toString();
		
	// 2. Clean the id
	const cleanId = videoId.split(/[?#&]/)[0];
		
	// 3. Return the embed URL - using 'youtube-nocookies' to avoid tracking cookies
	return `https://www.youtube-nocookie.com/embed/${cleanId}`;
};
/**
 * Helper to detect if the device is touch screen
 * @returns boolean
 */
export const isTouchScreen = (): boolean => {
	if (typeof window === 'undefined') return false;

	return (
		window.matchMedia('(pointer: coarse)').matches ||
		'navigator.maxTouchPoints' in navigator &&
		navigator.maxTouchPoints > 0
	);
};
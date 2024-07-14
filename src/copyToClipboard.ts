/**
 * Copy text to the clipboard.
 * # /!\ Works only in browser /!\
 * @param text - The text to copy to the clipboard.
 * @param option - An object containing the `onSuccess` and `onError` callback functions.
 * @returns A promise that resolves when the text has been copied to the clipboard.
 */
export const copyToClipboard = async (
	text: string,
	option?: {
		onSuccess: (data: string) => void;
		onError: (error: unknown) => void;
	}
): Promise<void> => {
	try {
		await navigator.clipboard.writeText(text);
		option?.onSuccess(text);
	} catch (error) {
		const textArea = document.createElement('textarea');
		textArea.value = text;

		// Make the textarea hidden
		textArea.style.position = 'fixed';
		textArea.style.opacity = '0';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			// Execute the copy command
			document.execCommand('copy'); // deprecated but still works in most browsers
			option?.onSuccess(text);
		} catch (error) {
			console.error('Error copying text to clipboard:', error);
			option?.onError(error);
		}

		document.body.removeChild(textArea);
	}
};

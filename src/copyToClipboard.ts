/**
 * Copy text to the clipboard.
 * @param text The text to copy to the clipboard.
 * @param onSuccess Callback function to execute when the text is successfully copied to the clipboard.
 * @param onError Callback function to execute when an error occurs while copying the text to the clipboard.
 * @returns Promise<void>
 */
export const copyToClipboard = async (
	text: string,
	onSuccess: () => void,
	onError: (error: unknown) => void
): Promise<void> => {
	try {
		await navigator.clipboard.writeText(text);
		onSuccess();
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
			onSuccess();
		} catch (error) {
			console.error('Error copying text to clipboard:', error);
			onError(error);
		}

		document.body.removeChild(textArea);
	}
};

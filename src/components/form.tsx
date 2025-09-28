'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

/**
 * Renders a URL shortening form with client-side validation and copy-to-clipboard feedback.
 *
 * The component provides an input that validates the entered value as a URL while typing.
 * When the button is clicked it sends the URL to the server, constructs a shortened link
 * using `NEXT_PUBLIC_BASE_URL`, copies the shortened link to the clipboard, and shows
 * success or error toasts for validation or configuration issues.
 *
 * @returns A React element containing a URL input and a "Short now!" button that triggers the shortening flow.
 */
export default function Form() {
	const [url, setURLtoShorten] = useState('');
	const [isURLvalid, setValid] = useState(false);

	async function handleURL() {
		if (!isURLvalid) {
			return toast.error('Please enter a valid URL');
		}

		const body = JSON.stringify(url);
		const res = await fetch('/p', {
			method: 'POST',
			body: body,
		});

		const short_id = await res.json();
		console.log(short_id);
		const base_url = process.env.NEXT_PUBLIC_BASE_URL;
		if (!base_url) {
			return toast.error('No base URL set');
		}
		const shortned_url = `${base_url}/p/${short_id.id}`;
		if (shortned_url) {
			await navigator.clipboard.writeText(shortned_url);
			toast.success('Shortened URL copied to clipboard!');
		}
	}
	return (
		<div className="p-4 flex space-x-4">
			<Input
				id="input_url"
				type="url"
				placeholder="https://google.com"
				onChange={(e) => {
					let newURL: string | URL = e.target.value;
					try {
						newURL = new URL(newURL);
						setValid(true);
					} catch (e) {
						setValid(false);
					}
					setURLtoShorten(e.target.value);
				}}
			></Input>
			<Button part="input_url" onClick={handleURL}>
				Short now!
			</Button>
		</div>
	);
}

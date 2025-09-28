'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

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

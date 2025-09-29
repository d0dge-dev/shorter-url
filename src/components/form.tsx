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

		const body = JSON.stringify({
			url: url,
		});

		try {
			const res = await fetch('/p', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			});

			if (!res.ok) {
				throw Error(await res.text());
			}

			const { id, url } = await res.json();
			const base_url = process.env.NEXT_PUBLIC_BASE_URL;
			const shortned_url = `${base_url}/p/${id}`;

			const target_url = url.split('/', 3);

			if (shortned_url) {
				await navigator.clipboard.writeText(shortned_url);
				toast.success(`Shortened URL for ${target_url.join('/')} copied to clipboard!`);
			}
		} catch (e: any) {
			toast.error(e.message);
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

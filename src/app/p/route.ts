import type { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

import { db } from '@/lib/db';
import { linksTable } from '@/db/schema';

export async function POST(req: NextRequest) {
	const { url } = await req.json().catch((e) => {
		return new Response('Please send valid JSON', {
			status: 400,
			statusText: 'Send valid JSON',
		});
	});

	if (!url) {
		return new Response('Please add a URL', {
			status: 400,
			statusText: 'Add URL in body',
		});
	}

	if (typeof url !== 'string') {
		return new Response('URL must be a string', {
			status: 400,
			statusText: 'URL has to be a string',
		});
	}

	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return new Response('URLs must start with http:// or https://', {
			status: 400,
			statusText: 'URL does not start with protocol',
		});
	}

	try {
		new URL(url);
	} catch (e) {
		return new Response('URL is not valid', {
			status: 400,
			statusText: 'URL not valid',
		});
	}

	const id = generateUID();

	const link_data: typeof linksTable.$inferInsert = {
		link_id: id,
		link_url: url,
	};

	await db.insert(linksTable).values(link_data);

	return Response.json({
		id: id,
		url: url,
	});
}

function generateUID(): string {
	return nanoid(7);
	// TODO:
	// - ID Validation -> is ID already used
}

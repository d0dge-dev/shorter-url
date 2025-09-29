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

	const id = await insertLink(url);

	if (typeof id === 'string') {
		return Response.json({
			id: id,
			url: url,
		});
	} else {
		return new Response(id.message, {
			status: 500,
			statusText: id.message,
		});
	}
}

async function insertLink(url: string, attempt: number = 1): Promise<string | Error> {
	if (attempt >= 5) return Error('Could not generate unique ID');

	try {
		const id = nanoid(7);

		const link_data: typeof linksTable.$inferInsert = {
			link_id: id,
			link_url: url,
		};

		await db.insert(linksTable).values(link_data);
		return id;
	} catch (e: any) {
		if (e.cause.code == '23505') {
			return insertLink(url, attempt + 1);
		} else {
			return Error('Database Error', e.cause);
		}
	}
}

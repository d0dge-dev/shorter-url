import { redirect, RedirectType } from 'next/navigation';
import type { NextRequest } from 'next/server';

import { db } from '@/lib/db';

/**
 * Handle GET requests for a short link id: look up the stored URL and redirect to it, or respond with 404 if not found.
 *
 * @param req - The incoming Next.js request
 * @param params - A promise resolving to an object with route parameters; expects an `id` string used to look up the target URL
 * @returns A `Response` with status 404 when the id is missing or not found; otherwise issues a replace-type redirect to the stored URL
 */
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const id = (await params).id;

	if (!id || !db.has(id)) {
		return new Response('Not Found', {
			status: 404,
		});
	}

	const url = db.get(id);

	if (!url) {
		return new Response('Not Found', {
			status: 404,
		});
	}

	redirect(url, RedirectType.replace);
}

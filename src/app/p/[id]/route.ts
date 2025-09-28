import { redirect, RedirectType } from 'next/navigation';
import type { NextRequest } from 'next/server';

import { db } from '@/lib/db';

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

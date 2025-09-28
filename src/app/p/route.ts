import type { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

import { db } from '@/lib/db';
import { linksTable } from '@/db/schema';

export async function POST(req: NextRequest) {
	const { url } = await req.json();
	const id = generateUID();

	const link_data: typeof linksTable.$inferInsert = {
		link_id: id,
		link_url: url,
	};

	await db.insert(linksTable).values(link_data);

	const response = {
		id: id,
		url: url,
	};

	return new Response(JSON.stringify(response));
}

function generateUID(): string {
	return nanoid(7);
}

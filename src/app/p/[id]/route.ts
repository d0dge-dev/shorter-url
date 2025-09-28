import type { NextRequest } from 'next/server';

import { db } from '@/lib/db';
import { linksTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const id = (await params).id;

	const link_data = await db.select().from(linksTable).where(eq(linksTable.link_id, id));

	if (link_data.length == 0) {
		return new Response('Not Found', {
			status: 404,
		});
	}

	const url = link_data[0].link_url;

	await db
		.update(linksTable)
		.set({
			view_count: link_data[0].view_count + 1,
		})
		.where(eq(linksTable.link_id, id));

	return Response.redirect(url, 307);
}

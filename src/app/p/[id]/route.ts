import { redirect, RedirectType } from 'next/navigation';
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

	redirect(url, RedirectType.replace);
}

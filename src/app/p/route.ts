import type { NextRequest } from 'next/server';

import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
	const body = await req.json();
	console.log(body);
	const id = generateUID(body);

	return new Response(
		JSON.stringify({
			id: id,
		})
	);
}

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

function generateUID(url: string) {
	const charsmaplow = 'abcdefghijklmnopqrstuvwxyz';
	const charmaphigh = charsmaplow.toUpperCase();
	const numbermap = '0123456789';

	const charstr = charmaphigh + charsmaplow + numbermap;
	const charset = charstr.split('');
	let random_id = '';
	for (let i = 0; i <= 6; i++) {
		const randomnumber = getRandomInt(charset.length);
		random_id = random_id + charset[randomnumber];
	}

	if (db.has(random_id)) {
		random_id = generateUID(url);
	} else {
		console.log('setting id', random_id, 'with url', url);
		db.set(random_id, url);
	}

	return random_id;
}

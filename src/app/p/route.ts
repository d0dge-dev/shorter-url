import type { NextRequest } from 'next/server';

import { db } from '@/lib/db';

/**
 * Handle POST requests by generating a unique 7-character alphanumeric ID for the request body and returning it.
 *
 * @param req - The incoming NextRequest whose JSON body is used as the value when generating the ID
 * @returns A Response whose JSON body contains the generated `id`
 */
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

/**
 * Produce a pseudorandom integer in the range 0 (inclusive) to `max` (exclusive).
 *
 * @param max - Upper bound (exclusive) for the generated integer; must be greater than 0 for meaningful results
 * @returns A pseudorandom integer greater than or equal to 0 and less than `max`
 */
function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

/**
 * Generate a 7-character alphanumeric identifier, store it in the database, and associate it with the given URL.
 *
 * The function ensures the identifier is not already present in the database by retrying until a unique ID is produced, then persists the mapping.
 *
 * @param url - The URL to associate with the generated identifier
 * @returns The generated 7-character alphanumeric identifier
 */
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

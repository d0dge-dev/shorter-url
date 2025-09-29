import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const rateLimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(5, '10 s'),
});

export default async function middleware(req: NextRequest) {
	console.log(req);
	const ip =
		req.headers.get('cf-connecting-ip') ||
		req.headers.get('x-forwarded-for') ||
		'127.0.0.1';
	const { success } = await rateLimit.limit(ip);
	return success
		? NextResponse.next()
		: NextResponse.redirect(process.env.NEXT_PUBLIC_BASE_URL + '/blocked');
}

export const config = {
	matcher: ['/p', '/p/:path*'],
};

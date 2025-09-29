import Form from '@/components/form';
import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="relative min-h-[calc(100dvh-0px)] overflow-hidden">
			{/* Gradient background */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,theme(colors.primary)/15%,transparent_60%),radial-gradient(circle_at_80%_30%,theme(colors.secondary)/20%,transparent_65%),linear-gradient(135deg,theme(colors.background),theme(colors.secondary)/30%)] dark:bg-[radial-gradient(circle_at_20%_20%,theme(colors.primary)/25%,transparent_60%),radial-gradient(circle_at_80%_30%,theme(colors.secondary)/35%,transparent_65%),linear-gradient(135deg,oklch(.13_.028_261.692),oklch(.21_.034_264.665)/40%)]" />
				{/* Blurred orbs */}
				<div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse" />
				<div className="absolute left-[15%] top-[25%] size-72 rounded-full bg-secondary/20 blur-2xl animate-[pulse_9s_ease-in-out_infinite]" />
				<div className="absolute right-[10%] top-[40%] size-80 rounded-full bg-primary/20 blur-2xl opacity-70 animate-[pulse_11s_ease-in-out_infinite]" />
			</div>

			<section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-12 text-center md:pt-12">
				<Header />
				<h2 className="mt-6 bg-gradient-to-br from-primary via-primary/70 to-secondary bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl">
					Shorten. Share. Track.
				</h2>
				<p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
					Turn long, messy links into clean, memorable short URLs in a flash. Paste a link
					below and we&apos;ll handle the rest.
				</p>
				<div className="mt-8 w-full rounded-xl border bg-card/60 p-2 backdrop-blur supports-[backdrop-filter]:bg-card/40 shadow-sm">
					<Form />
					<p className="px-4 pb-2 text-left text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70 md:text-xs">
						Press Enter or click &quot;Short now!&quot; — link auto-copies when ready.
					</p>
				</div>

				{/* Feature highlights */}
				<ul className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
					<li className="group relative overflow-hidden rounded-lg border bg-card/60 p-4 text-sm backdrop-blur transition-colors hover:bg-card/80">
						<span className="mb-1 block font-semibold">Fast</span>
						<span className="text-muted-foreground">
							Instant responses & clipboard copy.
						</span>
						<div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
					</li>
					<li className="group relative overflow-hidden rounded-lg border bg-card/60 p-4 text-sm backdrop-blur transition-colors hover:bg-card/80">
						<span className="mb-1 block font-semibold">Reliable</span>
						<span className="text-muted-foreground">
							Consistent redirects & safe handling.
						</span>
						<div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
					</li>
					<li className="group relative overflow-hidden rounded-lg border bg-card/60 p-4 text-sm backdrop-blur transition-colors hover:bg-card/80">
						<span className="mb-1 block font-semibold">Minimal</span>
						<span className="text-muted-foreground">No clutter—just the essentials.</span>
						<div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
					</li>
				</ul>

				<footer className="mt-16 mb-8 text-xs text-muted-foreground/70">
					<span>
						Built with Next.js & Drizzle •{' '}
						<Link href="https://github.com/d0dge-dev/url-shortener" target="_blank">
							View on Github
						</Link>
					</span>
				</footer>
			</section>
		</main>
	);
}

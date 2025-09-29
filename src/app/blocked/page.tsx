import Header from '@/components/header';

export default function Blocked() {
	return (
		<div className="min-h-screen flex flex-col ">
			<div className="flex justify-center mt-8">
				<Header />
			</div>
			<div className="flex flex-col items-center justify-center h-[calc(100vh-28vh)] space-y-4">
				<h1 className="text-3xl">Access Denied</h1>
				<p>Your IP has been temporarily blocked due to too many requests.</p>
				<p>Please try again in a few minutes.</p>
			</div>
		</div>
	);
}

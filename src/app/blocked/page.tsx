export default function Blocked() {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-20vh)] space-y-4">
			<h1 className="text-3xl">Access Denied</h1>
			<p>Your IP has been temporarily blocked due to too many requests.</p>
			<p>Please try again in a few minutes.</p>
		</div>
	);
}

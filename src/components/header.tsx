/**
 * Renders the header section for the URL shortener UI.
 *
 * @returns A JSX element containing a centered main title "URL Shortener" and a centered subtitle "Shorten your URL now".
 */
export default function Header() {
	return (
		<div>
			<div className="text-4xl flex justify-center mt-4">
				<h1>URL Shortener</h1>
			</div>
			<div className="text-2xl flex justify-center mt-8">
				<h2>Shorten your URL now</h2>
			</div>
		</div>
	);
}

import Header from '@/components/header';
import Form from '@/components/form';

/**
 * Page component that renders the application header and form.
 *
 * @returns The JSX element containing the Header and Form components.
 */
export default function Home() {
	return (
		<div>
			<Header></Header>
			<Form></Form>
		</div>
	);
}

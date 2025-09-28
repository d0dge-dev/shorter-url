import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'URL Shortener',
	description: 'Test Project for URL Shortener',
};

/**
 * Application root layout that applies global fonts, theme provider, and renders page content with a toast container.
 *
 * @param children - The page content to render inside the themed layout.
 * @returns The root HTML structure (html > body) with fonts, theme provider, rendered children, and a Toaster.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}

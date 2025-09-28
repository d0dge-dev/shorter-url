'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Provides theme context to descendants by rendering NextThemesProvider with the given props and children.
 *
 * @returns A React element that supplies theme context to `children`.
 */
export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

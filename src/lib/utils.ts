import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Normalize and merge CSS class name inputs, resolving Tailwind CSS conflicts.
 *
 * @param inputs - Values accepted by `clsx` (strings, arrays, objects, conditional expressions) that represent class names
 * @returns The final merged class string with duplicate and conflicting Tailwind classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

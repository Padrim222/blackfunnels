
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convertendo valores de USD para BRL
 * Taxa de conversão: R$ 5.9 = $1
 */
export const usdToBrl = (usdValue: number): number => {
  return usdValue * 5.9;
}


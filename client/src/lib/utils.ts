import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createAuthClient } from "better-auth/react"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authClient = createAuthClient({
  baseURL:"https://0j2dzj97-8080.inc1.devtunnels.ms/"
});
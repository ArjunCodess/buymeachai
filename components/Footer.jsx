/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oqyAS4Y9rjP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-5 px-4 md:px-6">
      <Link className="flex items-center gap-2" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
    </footer>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
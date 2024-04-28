"use client"

import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function page() {
    const { data: session } = useSession()

    // session usage
    /* if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    } */

    if (session) {
        const router = useRouter();
        router.push("/dashboard");
    }

    return (
        <section className="w-full h-[90vh] flex justify-center items-center p-6 md:p-0">
            <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <p className="text-gray-500 dark:text-gray-400"></p>
                </div>
                <div className="space-y-4">
                    <Button className="w-full" variant="outline" onClick={() => signIn("Github")}>
                        <GithubIcon className="mr-2 h-5 w-5" />
                        Login with GitHub
                    </Button>
                    <Button className="w-full" variant="outline">
                        <ChromeIcon className="mr-2 h-5 w-5" />
                        Login with Google
                    </Button>
                </div>
            </div>
        </section>
    )
}

function ChromeIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}

function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}
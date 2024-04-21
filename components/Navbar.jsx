/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docsintegrating-generated-code-into-your-nextjs-app
*/

import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

import Link from "next/link"

const navItems = [
    { title: "Home" },
    { title: "About" },
    { title: "Developer" },
];

const lastNavItem = navItems[navItems.length - 1]

export default function Navbar() {
    return (
        <header className="flex h-[4.1rem] md:h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <div className="flex justify-between w-full lg:hidden">
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    <MountainIcon className="h-6 w-6 mt-2" />
                </div>
                <SheetContent side="left">
                    <Link className="mr-6 hidden lg:flex" href="">
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6 text-2xl">
                        {navItems.map((navItem, i) => (
                            <Link key={i} className="hover:underline transition-all duration-300 flex w-full items-center py-2 font-semibold" href={navItem.title != "Home" ? "/" + navItem.title : "/"}>
                                {navItem.title}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
            <Link className="mr-6 hidden lg:flex" href="">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6 text-lg">
                <div className="pt-1.5">
                    {navItems.map((navItem, i) => (
                        <Link
                            key={i}
                            className="hover:rounded-md group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href={navItem.title != "Home" ? "/" + navItem.title : "/"}
                        >
                            {navItem.title}
                        </Link>
                    ))}
                </div>

                <div>
                    <Button size="lg" className="text-base bg-[#9c5239] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239]">Login</Button>
                </div>
            </nav>
        </header>
    )
}

function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
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
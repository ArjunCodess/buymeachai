/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fO2KC5FaWZo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-7xl/none">
              Support Your Favorite Creators
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              BuyMeAChai is a simple way to support the creators you love. Show your appreciation and help them creating more awesome content.
            </p>
          </div>
          <div className="space-x-4 sm:hidden inline-block">
            <Link asChild href="#">
            <Button
                className="text-sm bg-[#9c5239] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239]"
                variant="primary"
              >
                Buy Me a Coffee
              </Button>
            </Link>
            <Link asChild href="#">
              <Button
                className="text-sm border-[#9c5239] hover:bg-gray-100 hover:text-[#9c5239] focus-visible:ring-[#9c5239] dark:border-[#9c5239] dark:bg-gray-950 dark:hover:bg-[#9c5239]/90 dark:hover:text-gray-50 dark:focus-visible:ring-[#9c5239]"
                variant="outline"
              >
                Discover Creators
              </Button>
            </Link>
          </div>

          <div className="space-x-4 hidden sm:inline-block">
          <Link asChild href="#">
            <Button
                className="text-white text-base bg-[#9c5239] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239]"
                variant="primary"
                size="lg"
              >
                Buy Me a Coffee
              </Button>
            </Link>
            <Link asChild href="#">
              <Button
                className="text-base border-[#9c5239] hover:bg-gray-100 hover:text-[#9c5239] focus-visible:ring-[#9c5239] dark:border-[#9c5239] dark:bg-gray-950 dark:hover:bg-[#9c5239]/90 dark:hover:text-gray-50 dark:focus-visible:ring-[#9c5239]"
                variant="outline"
                size="lg"
              >
                Discover Creators
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
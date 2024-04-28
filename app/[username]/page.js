'use client'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.webp?b=1&s=170667a&w=0&k=20&c=BCLVJcuR8DrnmryR06g41jl0bFwLEtXyWaIydOnNfQ4="

import { useSession } from "next-auth/react"
import Image from "next/image";

export default function page({ params }) {
    const { data: session } = useSession();

    return (
        <main className="min-h-screen">
            <div className="relative h-[200px] md:h-[300px] overflow-hidden">
                <img
                    alt="Cover image"
                    className="h-full w-full object-cover object-center"
                    src="https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.webp?b=1&s=170667a&w=0&k=20&c=BCLVJcuR8DrnmryR06g41jl0bFwLEtXyWaIydOnNfQ4="
                    style={{
                        aspectRatio: "1600/900",
                        objectFit: "cover",
                    }}
                />

                {/* <Image
                    alt="Cover image"
                    className="h-full w-full object-cover object-center"
                    src={}
                    style={{
                        aspectRatio: "1600/900",
                        objectFit: "cover",
                    }}
                /> */}
            </div>
            <div className="relative mx-auto -mt-16 flex w-full max-w-md flex-col items-center justify-center space-y-4 px-4">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 ring-4 ring-white dark:ring-gray-800">
                    <AvatarImage alt="Profile picture" src={session?.user.image} />
                </Avatar>
                <div className="space-y-1 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">{session?.user.name}</h2>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">@{params.username}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-8 md:my-14 px-4 md:px-8 lg:px-36">
                <Card className="bg-white shadow-md">
                    <CardHeader>
                        <CardTitle className="text-black">Top 5 Supporters</CardTitle>
                    </CardHeader>
                    <CardContent className="text-black space-y-4">
                        <p><strong>Shubham</strong> donated <strong>₹50</strong> saying, <strong>"Thanks bro!"</strong></p>
                        <p><strong>Shubham</strong> donated <strong>₹50</strong> saying, <strong>"Thanks bro!"</strong></p>
                        <p><strong>Shubham</strong> donated <strong>₹50</strong> saying, <strong>"Thanks bro!"</strong></p>
                        <p><strong>Shubham</strong> donated <strong>₹50</strong> saying, <strong>"Thanks bro!"</strong></p>
                        <p><strong>Shubham</strong> donated <strong>₹50</strong> saying, <strong>"Thanks bro!"</strong></p>
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-md order-first md:order-last">
                    <CardHeader>
                        <CardTitle className="text-black">Make a Payment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input className="bg-[#f3f4f6] text-black placeholder-gray-500" placeholder="Enter Name" />
                        <Input className="bg-[#f3f4f6] text-black placeholder-gray-500" placeholder="Enter Message" />
                        <Input className="bg-[#f3f4f6] text-black placeholder-gray-500" placeholder="Enter Amount" />
                        <div className="flex flex-col gap-2 sm:flex-row justify-center">
                            <Button className="md:w-1/3 bg-[#a97559] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239] text-white">Enter ₹50</Button>
                            <Button className="md:w-1/3 bg-[#a97559] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239] text-white">Enter ₹100</Button>
                            <Button className="md:w-1/3 bg-[#a97559] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239] text-white">Enter ₹200</Button>
                        </div>
                        <Button className="w-full bg-[#9c5239] hover:bg-[#9c5239]/90 focus-visible:ring-[#9c5239] dark:bg-[#9c5239] dark:hover:bg-[#9c5239]/90 dark:focus-visible:ring-[#9c5239]">Pay &#x2794;</Button>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
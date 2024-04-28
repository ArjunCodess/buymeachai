"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function page() {
  const { data: session } = useSession()

  if (!session) {
    const router = useRouter();
    router.push("/login");
  }

  return (
    <main>
      <div className="mx-4 sm:mx-auto max-w-xl space-y-6 my-14">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>
        <form className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input className="w-full" id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="w-full" id="email" placeholder="Enter your email" required type="email" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Username</Label>
              <Input className="w-full" id="phone" placeholder="Enter your username" required type="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Cover Picture</Label>
              <Input className="w-full" id="address" placeholder="Enter your cover picture url" required />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Profile Picture</Label>
              <Input className="w-full" id="company" placeholder="Enter your profile picture url" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Razorpay ID</Label>
              <Input className="w-full" id="title" placeholder="Enter your Razorpay ID" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Razorpay Secret</Label>
              <Input className="w-full" id="title" placeholder="Enter your Razorpay Secret" required />
            </div>
          </div>
          <Button className="w-full bg-[#9c5239]" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </main>
  )
}
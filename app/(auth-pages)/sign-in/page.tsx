"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Eye, EyeOff, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { signInSchema, SignInType } from "@/model/authModel"

import logo from "@/assets/logo/logo.png";
import Image from "next/image"
import { MoonLoader } from "react-spinners"
import { signInAction } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { redirect } from "next/navigation"

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const { toast } = useToast()

  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: SignInType) {
    try {
      await signInAction(values)

      toast({
        title: "Success",
        description: "Successfully signed in",
        variant: "default",
      })

      redirect("/home")
    } catch (error) {
      console.error(error)

      if (error instanceof Error) {
        form.setError("root", {
          type: "manual",
          message: error.message,
        })
      }
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex flex-col space-y-6 w-full mx-10">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="logo" width={24} height={24} />
        <p className="text-sm font-semibold">DIREKSYON</p>
      </div>

      <div className="space-y-2 text-start">
        <h1 className="text-3xl font-bold tracking-tight">Hello,</h1>
        <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
        <p className="text-sm text-muted-foreground">Hey, welcome back we are here to guide you</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Enter your email" className="pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" {...field} />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </FormControl>
                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-primary">
                    Forgot password?
                  </Link>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full flex flex-row gap-3" disabled={form.formState.isSubmitting}>
            <MoonLoader size={16} color="#fff" loading={form.formState.isSubmitting} />
            Sign in
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">or</span>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in with Google
      </Button>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Are you new? </span>
        <Link href="/sign-up" className="font-medium text-primary hover:underline">
          Create an Account
        </Link>
      </div>
    </div>
  )
}


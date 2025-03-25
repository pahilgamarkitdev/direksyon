import type { ReactNode } from "react"
import { ThemeSwitcher } from "@/components/theme-switcher"
import logo from "@/assets/logo/logo.png"
import Image from "next/image"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side with logo and tagline */}
      <div className="flex flex-col justify-center bg-[#252A34] p-10 w-full">

        <div className="flex flex-row items-center justify-center space-y-6 gap-7">
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="text-center flex flex-col gap-1">
            <h1 className="text-[6rem] font-bold text-slate-300">DIREKSYON</h1>
            <p className="text-xl text-slate-400">No more wrong turns, only right directions.</p>
            <div className="mt-2 border-b border-slate-700 w-96 mx-auto"></div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Right side with auth forms */}
      <div className="flex w-[50vw] items-center justify-center bg-white dark:bg-background p-10 rounded-bl-3xl rounded-tl-3xl">
        {children}
      </div>
    </div>
  )
}


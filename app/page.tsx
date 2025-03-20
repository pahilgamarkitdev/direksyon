import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import logoSvg from "@/assets/logo/logo.svg"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <Image src={logoSvg} alt="Direksiyon Logo" width={80} height={80} className="h-auto w-20" />
            <h1 className="text-5xl font-bold tracking-wide text-foreground">DIREKSIYON</h1>
            <ThemeSwitcher />
          </div>
          <p className="mt-4 text-lg text-foreground">No more wrong turns, only right directions.</p>
          <Separator className="mt-2 bg-foreground/20" />
        </div>
        <div className="flex w-full flex-col gap-4 md:max-w-xs">
          <Button asChild variant="secondary" className="bg-muted text-foreground hover:bg-muted/80">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild variant="secondary" className="bg-muted text-foreground hover:bg-muted/80">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}


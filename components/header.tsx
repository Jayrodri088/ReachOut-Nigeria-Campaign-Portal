import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">RN</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">ReachOut Nigeria</h1>
              <p className="text-sm text-muted-foreground">Campaign Portal</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/participate" className="text-foreground hover:text-primary transition-colors">
              Participate
            </Link>
            <Link href="/upload" className="text-foreground hover:text-primary transition-colors">
              Upload
            </Link>
            <Link href="/testimonies" className="text-foreground hover:text-primary transition-colors">
              Testimonies
            </Link>
          </nav>
          <Link href="/participate">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, GitBranch, Brain, Layers, Terminal } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-6">
          <div className="flex flex-1 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-sm">
              FC
            </div>
            <span className="font-bold text-lg">Forged Codes</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="https://registry.forged.codes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Registry
            </Link>
            <Button size="sm" asChild>
              <Link href="/sign-up">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Shield className="h-3 w-3" />
            <Link href="https://registry.forged.codes" className="hover:underline">
              Forged Codes Registry
            </Link>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Build with
            <span className="block text-primary">Confidence</span>
            & Precision
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Forged Codes delivers enterprise-grade development infrastructure with the Forged Codes Registry
            and a powerful suite of tools for modern software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/sign-up">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="https://registry.forged.codes">
                <Terminal className="h-4 w-4" />
                View Registry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Built for Modern Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to ship robust, secure applications with the power of Forged Codes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Forged Codes Registry</h3>
              <p className="text-muted-foreground text-sm">
                Secure package registry with enterprise-grade access controls, audit trails, and CI/CD integration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Development Platform</h3>
              <p className="text-muted-foreground text-sm">
                Hosted graphical interface for intuitive repository management, collaboration, and deployment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI Integration</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered tools for intelligent code assistance, automated testing, and deployment workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-primary/5 p-8 md:p-12 border border-primary/10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Forge Your Future?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of developers building the next generation of software with Forged Codes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/sign-up">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col gap-4 p-6 max-w-6xl mx-auto w-full">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/agreements" className="hover:text-foreground transition-colors">Agreements</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
                FC
              </div>
              <span>&copy; 2025 AWFixer Enterprising Inc, OSS Division. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://registry.forged.codes" className="hover:text-foreground transition-colors">
                Registry
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
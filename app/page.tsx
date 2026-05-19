import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Server, GitBranch, Lock, Terminal, Cloud, Code2 } from "lucide-react"

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
            <Link href="/vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Vision
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
            <Server className="h-3 w-3" />
            Infrastructure for Software Supply Chains
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Code.
            <span className="block text-primary">Your Brand.</span>
            Our Infrastructure.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Forged Codes provides the backend infrastructure for version control, package registries,
            CI/CD, and security — you bring the frontend and the brand. Like AWS, but for code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/sign-up">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/about/grip">
                <Terminal className="h-4 w-4" />
                Learn About Grip
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Backend Infrastructure for Code</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Grip is the engine — a version control system that combines the best of Git,
              Mercurial, and Graphite, with every feature GitHub and GitLab promise.
              With no GUI. You build the frontend. We run the backend.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Grip VCS</h3>
              <p className="text-muted-foreground text-sm">
                A version control system combining Git, Mercurial, and Graphite&apos;s stack-based workflow.
                Hosting, branching, merging — all the power, none of the UI.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">CI/CD & Registry</h3>
              <p className="text-muted-foreground text-sm">
                Automated pipelines, package registries, and artifact hosting.
                Build, test, and deploy on infrastructure you don&apos;t have to manage.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Security & Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade encryption, audit trails, access controls, and compliance reporting.
                Your customers&apos; data stays safe on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The AWS Model, for Code</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You don&apos;t build a frontend for AWS. You build on AWS. Same principle.
              Grip provides the backend — hosting, version control, CI/CD, registry, security —
              and you build the experience your users see.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border bg-card p-8">
              <Code2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">You Build the Frontend</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Your brand, your design, your experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Web, desktop, or mobile — whatever serves your users
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Full control over how version control looks and feels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  No lock-in to our UI decisions
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-8">
              <Server className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">We Run the Backend</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Repository hosting and version control operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  CI/CD pipelines and artifact registries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Security scanning, access controls, audit logging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Scale, uptime, and compliance — handled
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-primary/5 p-8 md:p-12 border border-primary/10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Build on Grip?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Stop building version control backends. Start building the experience your users deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/sign-up">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/roadmap">View Roadmap</Link>
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
            <Link href="/about/grip" className="hover:text-foreground transition-colors">Grip</Link>
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
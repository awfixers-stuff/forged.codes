"use client";

import React from "react";
import { StatCard, SecurityFeature, ArchitectureLayer } from "@/app/shared/mdx-components";

export default function VisionContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h1>Our Vision</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We envision a world where <strong className="text-foreground">every idea can become reality</strong>, where the friction between thought and creation disappears, and where developers spend their energy on what truly matters: <strong className="text-foreground">solving meaningful problems</strong>.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">The Future We&apos;re Building</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="1 Billion+" value="Developers" trend="up" />
          <StatCard label="100M+" value="Projects Hosted" trend="up" />
          <StatCard label="10M+" value="Daily Collaborations" trend="up" />
          <StatCard label="Zero" value="Barriers to Entry" trend="up" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Pillars of Our Vision</h2>
        <div className="space-y-4">
          <SecurityFeature
            title="AI-Native Development"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            status="in-progress"
          >
            Development environments where AI is a first-class citizen—not just autocomplete, but <strong className="text-foreground">collaborative reasoning</strong>. Your AI pair understands your codebase, your team&apos;s patterns, and your project&apos;s context. Together, you architect, refactor, and ship.
          </SecurityFeature>

          <SecurityFeature
            title="Frictionless Collaboration"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            status="in-progress"
          >
            Code reviews that feel like pair programming. Real-time collaborative editing where <strong className="text-foreground">presence matters</strong>. Video, voice, and shared workspaces built into the fabric of development—not bolted on as afterthoughts.
          </SecurityFeature>

          <SecurityFeature
            title="Universal Ownership"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            }
            status="planned"
          >
            <strong className="text-foreground">Your code, your rules, your infrastructure.</strong> We&apos;re building toward a future where you can self-host everything, export everything, and modify everything. True digital sovereignty for developers and organizations.
          </SecurityFeature>

          <SecurityFeature
            title="Intelligent Automation"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            status="in-progress"
          >
            From commit message to changelog, from PR review to production deployment—<strong className="text-foreground">boring work belongs to machines</strong>. We automate the mechanical so you can focus on the creative.
          </SecurityFeature>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">The Development Experience We Imagine</h2>

        <h3>Morning</h3>
        <p className="text-muted-foreground">
          You wake up to a <strong className="text-foreground">daily digest</strong>—not of notifications, but of progress. Your AI assistant summarizes: <em>&ldquo;Team resolved 3 bugs, merged 2 features, and identified a performance improvement in your module. Here&apos;s what changed.&rdquo;</em>
        </p>
        <p className="text-muted-foreground">
          You review over coffee. The AI has already <strong className="text-foreground">written tests</strong> for yesterday&apos;s code, <strong className="text-foreground">suggested refactors</strong> that align with team patterns, and <strong className="text-foreground">flagged</strong> a dependency that needs updating.
        </p>

        <h3>Collaboration</h3>
        <p className="text-muted-foreground">
          Your teammate in Tokyo shares a <strong className="text-foreground">live coding session</strong>. You join, not just watching but <strong className="text-foreground">collaborating in real-time</strong>—editing, debugging, discussing. The AI facilitates, translating context, suggesting solutions, documenting decisions.
        </p>

        <h3>Review</h3>
        <p className="text-muted-foreground">
          A PR lands. Instead of mechanical checklist reviews, you focus on <strong className="text-foreground">architecture, trade-offs, and impact</strong>. The AI handled the syntax; you handle the <strong className="text-foreground">strategy</strong>. Code quality improved 40% because humans and AI complement each other.
        </p>

        <h3>Evening</h3>
        <p className="text-muted-foreground">
          You deploy with confidence. <strong className="text-foreground">Automated canaries</strong>, <strong className="text-foreground">progressive rollouts</strong>, <strong className="text-foreground">instant rollbacks</strong>—all orchestrated by systems that learned from millions of deployments. You sleep soundly knowing the <strong className="text-foreground">chaos experiments</strong> ran overnight and everything passed.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Metrics That Matter</h2>
        <ArchitectureLayer
          name="Developer Joy"
          description="Time spent creating vs. configuring"
          technologies={["Automated Workflows", "AI Assistance", "Zero-Config Deploy"]}
          securityControls={[
            "80% reduction in boilerplate",
            "60% faster onboarding",
            "90% reduction in context switching",
            "Happiness measured weekly",
          ]}
        />
        <ArchitectureLayer
          name="Team Velocity"
          description="Throughput without burnout"
          technologies={["Async-First", "Automated Testing", "CI/CD"]}
          securityControls={[
            "Sustainable pace (40hr weeks)",
            "PR review time < 2 hours median",
            "Deploy frequency: 100+ per week",
            "Zero weekend firefighting",
          ]}
        />
        <ArchitectureLayer
          name="System Health"
          description="Reliability you can trust"
          technologies={["Chaos Engineering", "Observability", "SLAs"]}
          securityControls={[
            "99.99% uptime (measured)",
            "p95 latency < 100ms",
            "MTTR < 15 minutes",
            "Zero data loss since 2023",
          ]}
        />
        <ArchitectureLayer
          name="Innovation Rate"
          description="Shipping what matters"
          technologies={["Rapid Prototyping", "A/B Testing", "Feature Flags"]}
          securityControls={[
            "Idea &rarr; Production: 2 hours median",
            "Experiment cycle: 1 day",
            "User feedback: real-time",
            "Learn &rarr; Iterate &rarr; Ship: continuous",
          ]}
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What We Reject</h2>
        <div className="rounded-xl border border-border bg-card/50 p-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-muted-foreground">Vibrancy theater—open offices designed for Instagram, not productivity</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-muted-foreground">Hero culture—sustainable pace isn&apos;t optional, it&apos;s required</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-muted-foreground">Extractive platforms—we succeed only when our users own their success</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-muted-foreground">Black-box AI—transparency isn&apos;t negotiable in tools we trust</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our North Star</h2>

        <blockquote className="border-l-4 border-primary/50 pl-4 italic my-6 mx-0 bg-muted/50 py-2 pr-4 rounded-r-md text-muted-foreground">
          <strong className="text-foreground">&ldquo;Make the next developer 10x more effective, not by replacing them with AI, but by amplifying what makes them irreplaceably human.&rdquo;</strong>
        </blockquote>

        <p className="text-muted-foreground">We measure progress not in quarterly revenue, but in:</p>
        <ul>
          <li><strong className="text-foreground">Hours returned</strong> to developers&apos; lives</li>
          <li><strong className="text-foreground">Ideas shipped</strong> that would have been impossible alone</li>
          <li><strong className="text-foreground">Teams thriving</strong> without burnout</li>
          <li><strong className="text-foreground">Systems trusted</strong> with civilization&apos;s most important work</li>
        </ul>

        <h2 className="text-3xl font-bold tracking-tight text-foreground">Join Us</h2>
        <p className="text-muted-foreground">
          The next decade of computing will be defined not by the tools we use, but by <strong className="text-foreground">how we work together</strong>. We&apos;re building that future—transparently, collaboratively, and with unwavering commitment to developers&apos; agency.
        </p>
        <p>
          <a href="https://forged.codes/waitlist">Get early access</a> | <a href="https://github.com/forged-codes">Contribute</a> | <a href="mailto:partnerships@forged.codes">Partner with us</a>
        </p>

        <div className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
          <p><strong>Vision Version:</strong> 2.1</p>
          <p><strong>Last Updated:</strong> October 2024</p>
          <p><strong>Next Review:</strong> Q1 2025</p>
          <p><strong>Questions?:</strong> hello@forged.codes</p>
        </div>
      </div>
    </div>
  );
}

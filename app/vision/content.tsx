"use client";

import React from "react";
import { StatCard, SecurityFeature, ArchitectureLayer } from "@/app/shared/mdx-components";

export default function VisionContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-invert max-w-none mb-28 prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
        <h1 className="font-display">Our Vision</h1>
        <p className="text-lg text-foreground/70 leading-relaxed">
          We envision a world where <strong className="text-foreground">version control infrastructure is a service</strong>,
          not a product you have to build yourself. Where any team can stand up a best-in-class code platform
          by focusing on their users — not their backend.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">The Infrastructure Gap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="VCS Platforms" value="3" trend="up" />
          <StatCard label="AWS Services" value="200+" trend="up" />
          <StatCard label="Build-Your-Own" value="Countless" trend="down" />
          <StatCard label="IaaS Revenues" value="$150B+" trend="up" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Pillars of Our Vision</h2>
        <div className="space-y-4">
          <SecurityFeature
            title="Infrastructure as a Service"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            }
            status="implemented"
          >
            AWS made servers a service. Grip makes version control infrastructure a service. Repository hosting,
            CI/CD, package registries, security scanning — all available through an API, no GUI required.
          </SecurityFeature>

          <SecurityFeature
            title="API-First Architecture"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            status="implemented"
          >
            Every feature accessible through a well-documented API. If a human can do it through a GUI,
            a program can do it through our API — because the API came first. Build web apps, desktop clients,
            mobile apps, or CLI tools. Grip is your backend.
          </SecurityFeature>

          <SecurityFeature
            title="Brand Ownership"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343v1.314" />
              </svg>
            }
            status="in-progress"
          >
            GitHub&apos;s frontend is GitHub&apos;s brand. With Grip, your frontend is your brand.
            Your design, your domain, your user experience. We handle the plumbing — you own the relationship.
          </SecurityFeature>

          <SecurityFeature
            title="Security & Compliance by Default"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            status="implemented"
          >
            E2E encryption, audit trails, access controls, vulnerability scanning — built into the infrastructure
            layer. Your users get enterprise-grade security without you writing a single line of auth code.
          </SecurityFeature>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">The Grip Architecture</h2>
        <p className="text-foreground/70 mb-8">
          Grip is built in layers — each one an independent service you can use or replace.
        </p>
        <div className="space-y-0">
          <ArchitectureLayer
            name="Your Frontend"
            description="Web app, desktop client, mobile app, or CLI — you build what your users need."
            technologies={["React", "Swift", "Kotlin", "Electron", "Terminal"]}
            securityControls={["Your auth", "Your UX", "Your brand", "Your domain"]}
          />
          <ArchitectureLayer
            name="Grip API Gateway"
            description="REST and GraphQL APIs that expose every VCS operation. Authentication, rate limiting, and request routing."
            technologies={["REST", "GraphQL", "WebSocket", "gRPC"]}
            securityControls={["API key rotation", "Rate limiting", "OAuth 2.0", "Token scoping"]}
          />
          <ArchitectureLayer
            name="Grip VCS Engine"
            description="The core version control system — Git-compatible protocols, Mercurial branching, Graphite stack workflows."
            technologies={["Git protocol", "SHA-256", "Content-addressable", "Packfiles"]}
            securityControls={["E2E encryption", "Signed commits", "Branch protection", "Immutable history"]}
          />
          <ArchitectureLayer
            name="Infrastructure Services"
            description="CI/CD pipelines, package registries, security scanning, and artifact storage — all managed."
            technologies={["Kubernetes", "PostgreSQL", "S3", "Redis", "NATS"]}
            securityControls={["SOC 2 Type II", "ISO 27001", "GDPR", "Immutable audit logs"]}
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Why This Model Works</h2>
        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
          <p className="text-foreground/70">
            When AWS launched, companies stopped building data centers. When Stripe launched, companies stopped
            building payment infrastructure. When Twilio launched, companies stopped building telephony stacks.
          </p>
          <p className="text-foreground/70">
            <strong className="text-foreground">Grip does the same for version control.</strong> Every company that runs a code platform
            builds the same backend: repository hosting, access controls, CI/CD, package registries, security scanning.
            That&apos;s duplicated effort.
          </p>
          <p className="text-foreground/70">
            With Grip, you focus on what makes your platform unique — the frontend experience, the community,
            the integrations — and we run the infrastructure that makes it all work.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-primary/5 border border-primary/10 p-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Future</h2>
        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
          <p className="text-foreground/70">
            We believe the next generation of developer tools won&apos;t look like GitHub or GitLab. They&apos;ll look
            like products — with their own brands, their own experiences, and their own communities — all powered
            by the same backend infrastructure.
          </p>
          <p className="text-foreground/70">
            <strong className="text-foreground">Grip is that infrastructure.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
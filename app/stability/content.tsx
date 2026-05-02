"use client";

import React from "react";
import { StatCard, ArchitectureLayer, SecurityFeature, ThreatModel, ComplianceBadge } from "@/app/shared/mdx-components";

export default function StabilityContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h1>Stability &amp; Reliability Model</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Forged Codes, Gripped, and Grip are engineered for maximum availability and resilience. We measure our success not just in features shipped, but in uninterrupted service during your most critical moments.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Reliability Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Uptime SLA" value="99.99%" trend="up" />
          <StatCard label="Mean Time Between Failures" value="&gt; 730 hrs" trend="up" />
          <StatCard label="Recovery Time Objective" value="< 30 min" trend="up" />
          <StatCard label="Recovery Point Objective" value="< 5 min" trend="up" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Architecture Resilience</h2>
        <ArchitectureLayer
          name="Global Load Balancing"
          description="Intelligent traffic routing across regions"
          technologies={["Cloudflare Load Balancer", "Health Checks", "GeoDNS"]}
          securityControls={[
            "Active-active multi-region deployment",
            "Automatic failover (30-second detection)",
            "Circuit breakers on degraded dependencies",
            "Graceful degradation strategies",
          ]}
        />
        <ArchitectureLayer
          name="Application Tier"
          description="Stateless services with horizontal scaling"
          technologies={["Kubernetes", "Node.js", "Serverless Functions"]}
          securityControls={[
            "Auto-scaling based on CPU/memory/queue depth",
            "Pod anti-affinity for zone distribution",
            "Health checks (liveness & readiness probes)",
            "Blue-green deployments with instant rollback",
          ]}
        />
        <ArchitectureLayer
          name="Data Tier"
          description="Highly available persistent storage"
          technologies={["PostgreSQL", "Redis Cluster", "S3 Cross-Region"]}
          securityControls={[
            "Multi-AZ database replication (synchronous)",
            "Automated failover with Patroni",
            "Read replicas across 3 availability zones",
            "Point-in-time recovery to any second (7 days)",
          ]}
        />
        <ArchitectureLayer
          name="Queue &amp; Eventing"
          description="Resilient asynchronous processing"
          technologies={["Apache Kafka", "Redis Streams", "SQS"]}
          securityControls={[
            "At-least-once delivery guarantees",
            "Dead letter queues for poison messages",
            "Message replay capability (7-day retention)",
            "Backpressure handling and flow control",
          ]}
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Resilience Patterns</h2>
        <div className="space-y-4">
          <SecurityFeature
            title="Chaos Engineering"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            status="in-progress"
          >
            Weekly automated chaos experiments using Gremlin. We intentionally inject failures to validate our resilience: killing random nodes, introducing network latency (100ms-2s), simulating zone outages, and triggering dependency failures. Current measured uptime: 99.97% over 12 months.
          </SecurityFeature>

          <SecurityFeature
            title="Disaster Recovery"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            status="implemented"
          >
            Comprehensive DR strategy with cross-region replication (US-East &harr; EU-West). Encrypted snapshots every 5 minutes with 30-day retention. Quarterly full-environment failover drills with complete documentation. RPO &lt; 5 minutes, RTO &lt; 30 minutes for critical services.
          </SecurityFeature>

          <SecurityFeature
            title="Capacity Management"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            }
            status="implemented"
          >
            Proactive capacity planning with 3x headroom for traffic spikes. Load testing performed monthly using k6 (simulating 100k concurrent users). Auto-scaling triggers at 70% resource utilization. Historical growth trending with quarterly capacity review.
          </SecurityFeature>

          <SecurityFeature
            title="Dependency Resilience"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            status="in-progress"
          >
            Multi-provider strategy for critical dependencies (PostgreSQL on AWS RDS + self-managed, Cloudflare + Fastly CDN). Circuit breakers and fallback mechanisms for all external API calls. Feature flags (LaunchDarkly) for instant capability disablement during incidents.
          </SecurityFeature>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Monitoring &amp; Observability</h2>
        <div className="space-y-4">
          <ThreatModel
            threat="Cascading Failures"
            likelihood="low"
            impact="high"
            mitigation="Bulkheads, circuit breakers, exponential backoff with jitter, and automatic service isolation. Dependency health scores trigger preemptive traffic shifting."
          />
          <ThreatModel
            threat="Slow Performance Degradation"
            likelihood="medium"
            impact="medium"
            mitigation="SLO-based alerting (p95 latency, error rates, saturation). Continuous profiling (Pyroscope), distributed tracing (Jaeger), and automated performance regression detection."
          />
          <ThreatModel
            threat="Data Corruption"
            likelihood="low"
            impact="high"
            mitigation="Immutable audit logs, row-level checksums, background data validation jobs, and automated repair from replicas. Versioned schema migrations with rollback capability."
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">SLAs &amp; Guarantees</h2>
        <div className="space-y-3">
          <ComplianceBadge
            standard="Uptime SLA: 99.99%"
            description="Monthly uptime percentage excluding scheduled maintenance"
            certified={true}
          />
          <ComplianceBadge
            standard="Support Response: < 15 min"
            description="P1 incidents (complete outage) - 24/7 coverage"
            certified={true}
          />
          <ComplianceBadge
            standard="Data Durability"
            description="99.999999999% (11 nines) annual object durability"
            certified={true}
          />
          <ComplianceBadge
            standard="Backup Recovery"
            description="RPO < 5 min, RTO < 30 min for critical tier"
            certified={true}
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Incident Management</h2>
        <div className="space-y-4">
          <SecurityFeature
            title="24/7 On-Call Rotation"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            status="implemented"
          >
            Three-tier on-call rotation (L1/L2/L3) with 8-hour shifts. Primary + secondary coverage for all critical services. Escalation policies ensure incidents reach engineering leadership within 30 minutes if unresolved. Post-incident reviews with action items tracked to completion.
          </SecurityFeature>

          <SecurityFeature
            title="Automated Remediation"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            status="in-progress"
          >
            Runbook automation for common failure scenarios: auto-restart hung services, scale-up on sustained load, failover databases, clear poisoned caches, and rotate compromised certificates. 60% of P3 incidents resolved without human intervention.
          </SecurityFeature>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Performance SLAs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-border bg-card/50 p-5">
            <div className="text-2xl font-bold text-foreground">p95: &lt; 100ms</div>
            <div className="text-sm text-muted-foreground mt-1">API Response Time</div>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-5">
            <div className="text-2xl font-bold text-foreground">p99: &lt; 500ms</div>
            <div className="text-sm text-muted-foreground mt-1">API Response Time</div>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-5">
            <div className="text-2xl font-bold text-foreground">&lt; 0.1%</div>
            <div className="text-sm text-muted-foreground mt-1">Error Rate Target</div>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-5">
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground mt-1">Deploy Success Rate</div>
          </div>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Testing Philosophy</h2>
        <SecurityFeature
          title="Resilience Testing"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          status="implemented"
        >
          Property-based testing (fast-check), contract testing (Pact), and chaos experiments. Game days quarterly where we simulate region failures, dependency outages, and traffic spikes. All critical paths have automated resilience verification in CI/CD.
        </SecurityFeature>

        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Reliability Commitment</h2>
        <p className="text-muted-foreground">
          We guarantee measurable, auditable reliability. Not just &ldquo;high availability&rdquo;&mdash;but <strong className="text-foreground">proven</strong> availability with transparent metrics, accountable SLAs, and engineering practices that prioritize resilience over features when necessary.
        </p>

        <blockquote className="border-l-4 border-primary/50 pl-4 italic my-6 mx-0 bg-muted/50 py-2 pr-4 rounded-r-md text-muted-foreground">
          &ldquo;It&apos;s not enough to build systems that work. We build systems that work <strong className="text-foreground">when everything else fails</strong>.&rdquo; &mdash; Forged Codes Engineering Manifesto
        </blockquote>

        <div className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
          <p><strong>Current Reliability Score:</strong> 99.97% (12-month rolling average)</p>
          <p><strong>Last Major Outage:</strong> March 2024 (14 minutes) &mdash; <a href="https://status.forged.codes/postmortems/2024-03">Post-mortem</a></p>
          <p><strong>Next Game Day:</strong> February 15, 2025</p>
          <p><strong>Questions?:</strong> reliability@forged.codes</p>
        </div>
      </div>
    </div>
  );
}

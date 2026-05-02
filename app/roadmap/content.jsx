"use client";

import React, { useState } from "react";
import { Phase, Milestone, FeatureList, FeatureItem, TimelineItem, MetricCard } from "./components/RoadmapMdx";

function RoadmapContent() {
  const [expandedPhase, setExpandedPhase] = useState(null);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our vision for the future of development collaboration. Here's what we're building, quarter by quarter.
        </p>
      </div>

      <div className="space-y-8 mb-16">
        <Phase title="Foundation &amp; Core" quarter="Q1 2025">
          <Milestone title="Grip Platform Launch" status="completed">
            Released the core version control system with intelligent branching and AI-powered merge conflict resolution.
          </Milestone>

          <Milestone title="Basic GUI Interface" status="completed">
            Visual repository explorer with dependency graphs and contribution heatmaps.
          </Milestone>

          <Milestone title="Real-Time Collaboration Beta" status="in-progress">
            Live code reviews and integrated chat for teams working simultaneously.
          </Milestone>

          <FeatureList>
            <FeatureItem
              title="End-to-End Encryption"
              description="All repository data encrypted in transit and at rest"
            />
            <FeatureItem
              title="Fine-Grained Access Control"
              description="Branch-level and file-level permissions"
            />
            <FeatureItem
              title="Audit Trails"
              description="Complete history tracking of all changes"
            />
          </FeatureList>
        </Phase>

        <Phase title="Developer Experience" quarter="Q2 2025">
          <Milestone title="Advanced Code Review Tools">
            Inline comments, suggestion blocks, and automated code quality checks.
          </Milestone>

          <Milestone title="IDE Deep Integration">
            Native plugins for VS Code, IntelliJ, and WebStorm with full feature parity.
          </Milestone>

          <Milestone title="Performance Dashboard">
            Insights into team velocity, code review times, and deployment frequency.
          </Milestone>

          <FeatureList>
            <FeatureItem
              title="AI-Powered Code Suggestions"
              description="Context-aware recommendations during code reviews"
            />
            <FeatureItem
              title="Custom Workflows"
              description="Automate repetitive tasks with visual workflow builder"
            />
            <FeatureItem
              title="Advanced Branching Strategies"
              description="GitFlow, trunk-based, and custom workflow support"
            />
          </FeatureList>
        </Phase>

        <Phase title="Team Collaboration" quarter="Q3 2025">
          <Milestone title="Video Integration">
            Start video calls directly from pull requests and code reviews.
          </Milestone>

          <Milestone title="Project Management Sync">
            Two-way integration with Jira, Linear, and Trello.
          </Milestone>

          <Milestone title="Knowledge Base">
            Automatically generated documentation from code comments and commit messages.
          </Milestone>

          <FeatureList>
            <FeatureItem
              title="Meeting Scheduler"
              description="Find optimal times for team discussions based on availability"
            />
            <FeatureItem
              title="Task Automation"
              description="Auto-assign reviewers based on file ownership and expertise"
            />
            <FeatureItem
              title="Team Analytics"
              description="Identify bottlenecks and optimize team performance"
            />
          </FeatureList>
        </Phase>

        <Phase title="Enterprise Scale" quarter="Q4 2025">
          <Milestone title="Single Sign-On (SSO)">
            SAML 2.0, OAuth 2.0, and enterprise identity provider support.
          </Milestone>

          <Milestone title="Advanced Security Controls">
            IP allowlisting, device management, and compliance reporting.
          </Milestone>

          <Milestone title="Dedicated Infrastructure">
            Private cloud deployments with custom SLAs and support.
          </Milestone>

          <FeatureList>
            <FeatureItem
              title="Compliance Dashboards"
              description="SOC 2, ISO 27001, and GDPR compliance tracking"
            />
            <FeatureItem
              title="Custom Policies"
              description="Enforce organization-specific security and workflow rules"
            />
            <FeatureItem
              title="API Rate Limiting"
              description="Granular control over API access and usage quotas"
            />
          </FeatureList>
        </Phase>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Roadmap Timeline</h2>
        <div className="space-y-2">
          <TimelineItem date="Q1 2025" title="Platform Foundation">
            Core version control system, basic collaboration features, and initial integrations.
          </TimelineItem>
          <TimelineItem date="Q2 2025" title="Developer Empowerment">
            Enhanced code review experience, deeper IDE integration, and workflow automation.
          </TimelineItem>
          <TimelineItem date="Q3 2025" title="Team Scale">
            Advanced collaboration tools, project management integration, and team insights.
          </TimelineItem>
          <TimelineItem date="Q4 2025" title="Enterprise Ready">
            Complete security suite, compliance features, and dedicated deployment options.
          </TimelineItem>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard label="Active Users" value="50K+" change="+120% this quarter" />
          <MetricCard label="Repositories Hosted" value="500K+" change="+85% this quarter" />
          <MetricCard label="Code Reviews" value="2M+" change="+200% this quarter" />
          <MetricCard label="Teams Using Grip" value="5K+" change="+150% this quarter" />
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Coming Soon</h2>
        <ul>
          <li><strong>AI Pair Programming:</strong> Real-time collaborative coding with AI assistance</li>
          <li><strong>Smart Branching:</strong> Automatic branch strategy recommendations</li>
          <li><strong>Dependency Visualization:</strong> Interactive graphs showing code relationships</li>
          <li><strong>Release Management:</strong> Automated versioning, changelogs, and deployment pipelines</li>
        </ul>
      </div>
    </div>
  );
}

export default RoadmapContent;
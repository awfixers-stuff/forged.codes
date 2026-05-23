import React from "react";

interface PhaseProps {
  title: string;
  quarter: string;
  children: React.ReactNode;
}

export function Phase({ title, quarter, children }: PhaseProps) {
  return (
    <div className="border-l-4 border-foreground/20 pl-6 relative pb-12">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-foreground ring-4 ring-background" />
      <div className="mb-4">
        <span className="text-xs font-medium uppercase tracking-wider text-foreground/55">{quarter}</span>
        <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

interface MilestoneProps {
  title: string;
  status?: "completed" | "in-progress" | "planned";
  children?: React.ReactNode;
}

export function Milestone({ title, status = "planned", children }: MilestoneProps) {
  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-blue-500",
    planned: "bg-foreground/20",
  };

  const statusTextColors = {
    completed: "text-green-400",
    "in-progress": "text-blue-400",
    planned: "text-foreground/50",
  };

  const statusLabels = {
    completed: "Done",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <div className="rounded-lg border border-foreground/15 bg-foreground/[0.03] p-5 hover:border-foreground/25 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[status]} ${status === "planned" ? "text-foreground/60" : "text-white"}`}>
          {statusLabels[status]}
        </span>
      </div>
      {children && <div className="text-sm text-foreground/70">{children}</div>}
    </div>
  );
}

interface FeatureListProps {
  children: React.ReactNode;
}

export function FeatureList({ children }: FeatureListProps) {
  return <ul className="space-y-3">{children}</ul>;
}

interface FeatureItemProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <li className="flex gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {icon || (
          <svg className="w-5 h-5 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div>
        <div className="font-medium text-foreground">{title}</div>
        {description && <div className="text-sm text-foreground/65">{description}</div>}
      </div>
    </li>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  children?: React.ReactNode;
}

export function TimelineItem({ date, title, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-foreground/15 ml-4">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-foreground/40" />
      <div className="text-sm font-medium text-foreground/70">{date}</div>
      <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
      {children && <div className="mt-2 text-foreground/70">{children}</div>}
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
}

export function MetricCard({ label, value, change }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-foreground/15 bg-foreground/[0.03] p-6">
      <div className="text-sm font-medium text-foreground/55">{label}</div>
      <div className="text-3xl font-bold text-foreground mt-2">{value}</div>
      {change && (
        <div className="text-sm text-green-400 mt-2 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {change}
        </div>
      )}
    </div>
  );
}
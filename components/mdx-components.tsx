"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface MdxComponentsProps {
  children?: React.ReactNode;
}

export function MdxComponents({ children }: MdxComponentsProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
      {children}
    </div>
  );
}

// Custom MDX components for enhanced styling — dark-first, high contrast
export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "scroll-mt-20 text-4xl font-display tracking-tight text-foreground",
        "border-b border-foreground/15 pb-3 mb-6",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "scroll-mt-16 text-3xl font-display tracking-tight text-foreground",
        "border-b border-foreground/15 pb-3 mb-4 mt-10",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "scroll-mt-12 text-2xl font-display tracking-tight text-foreground",
        "mt-8 mb-3",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "scroll-mt-12 text-xl font-bold tracking-tight text-foreground",
        "mt-6 mb-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 text-foreground/85 mb-4",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = props.href?.startsWith("http");
    const Component = isExternal ? "a" : Link;

    return (
      <Component
        href={props.href || ""}
        className={cn(
          "font-medium text-foreground underline decoration-foreground/30 underline-offset-4",
          "transition-colors hover:text-foreground/70",
          "inline-flex items-center gap-1",
          className
        )}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {props.children}
        {isExternal && <ExternalLink className="h-3 w-3" />}
      </Component>
    );
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "border-l-4 border-foreground/40 pl-4 italic",
        "my-6 mx-0 bg-foreground/5 py-3 pr-4 rounded-r-md",
        "text-foreground/75",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-foreground/10 px-[0.3rem] py-[0.2rem]",
        "font-mono text-sm font-semibold text-foreground/90",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "relative overflow-x-auto rounded-lg border border-foreground/15 bg-foreground text-background",
        "p-4 my-6",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          "w-full caption-bottom text-sm",
          "border-separate border-spacing-0",
          className
        )}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-foreground/15 px-4 py-3 text-left",
        "font-bold text-foreground",
        "bg-foreground/5",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-foreground/15 px-4 py-3 text-foreground/85",
        "[tbody>tr:nth-child(odd)_&]:bg-foreground/[0.03]",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "my-4 ml-6 list-disc marker:text-foreground/50 [&>li]:mt-2",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "my-4 ml-6 list-decimal marker:text-foreground/50 [&>li]:mt-2",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed text-foreground/85", className)} {...props} />
  ),
  hr: ({ ...props }) => (
    <hr
      className="my-8 border-foreground/15"
      {...props}
    />
  ),
};
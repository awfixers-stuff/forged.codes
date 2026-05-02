import { notFound } from "next/navigation";
import { use } from "react";
import { mdxComponents } from "@/components/mdx-components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";

// Type for frontmatter metadata
interface Metadata {
  title?: string;
  [key: string]: any;
}

// Cache for MDX files
let mdxCache: Record<string, { metadata: Metadata; content: string }> = {};

async function getMdxData(slug: string) {
  if (mdxCache[slug]) {
    return mdxCache[slug];
  }

  const contentDir = path.join(process.cwd(), "app/about/content");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(fileContent);

  const result: { metadata: Metadata; content: string } = {
    metadata,
    content,
  };
  mdxCache[slug] = result;
  return result;
}

async function getAvailableSlugs() {
  const contentDir = path.join(process.cwd(), "app/about/content");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

interface AboutPageParams {
  params: {
    page: string[];
  };
}

const compiledCache = new Map<string, React.ComponentType<any>>();

function compileMDX(content: string): React.ComponentType<any> {
  const cacheKey = content;
  if (compiledCache.has(cacheKey)) {
    return compiledCache.get(cacheKey)!;
  }

  // Simple MDX-like rendering - parse headers and create structured components
  // For production, use proper MDX compilation
  const lines = content.split("\n");
  
  const MDXComponent = () => (
    <div>
      {lines.map((line, idx) => {
        // Headers
        if (line.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-2xl font-bold tracking-tight text-foreground mt-6 mb-3">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-3xl font-bold tracking-tight text-foreground border-b border-border pb-2 mb-4 mt-8">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("# ")) {
          return (
            <h1 key={idx} className="text-4xl font-bold tracking-tight text-foreground border-b border-border pb-2 mb-4">
              {line.replace("# ", "")}
            </h1>
          );
        }
        // Code blocks (simplified)
        if (line.startsWith("```")) {
          return null;
        }
        // Blockquote
        if (line.startsWith("> ")) {
          return (
            <blockquote key={idx} className="border-l-4 border-primary/50 pl-4 italic my-6 mx-0 bg-muted/50 py-2 pr-4 rounded-r-md text-muted-foreground">
              {line.replace("> ", "")}
            </blockquote>
          );
        }
        // Lists
        if (line.match(/^[-*] /)) {
          return (
            <li key={idx} className="leading-relaxed">
              {line.replace(/^[-*] /, "")}
            </li>
          );
        }
        // Table headers (simplified)
        if (line.match(/^\|.*\|$/)) {
          return null; // Tables rendered separately
        }
        // Links
        const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          return (
            <p key={idx} className="leading-7 text-muted-foreground mb-4">
              <a
                href={linkMatch[2]}
                className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkMatch[1]}
              </a>
            </p>
          );
        }
        // Inline code
        const withInlineCode = line.replace(/`([^`]+)`/g, (match, code) => {
          return `<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary">${code}</code>`;
        });

        // Empty lines
        if (line.trim() === "") {
          return <br key={idx} />;
        }

        // Regular paragraph
        return (
          <p
            key={idx}
            className="leading-7 text-muted-foreground mb-4"
            dangerouslySetInnerHTML={{ __html: withInlineCode }}
          />
        );
      })}
    </div>
  );
  
  compiledCache.set(cacheKey, MDXComponent);
  return MDXComponent;
}

export default async function AboutPage({
  params,
}: AboutPageParams) {
  // In Turbopack/Next.js 15+, params is a Promise that needs unwrapping
  const { page: slugArray } = await params;
  const slug = slugArray.join("/");

  const availableSlugs = await getAvailableSlugs();
  const targetSlug = slug;

  if (!targetSlug || !availableSlugs.includes(targetSlug)) {
    notFound();
  }

  const mdxData = await getMdxData(targetSlug);

  if (!mdxData) {
    notFound();
  }

  const MDXContent = compileMDX(mdxData.content);

  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <span>/</span>
            <span className="text-foreground capitalize">{targetSlug}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {mdxData.metadata.title || targetSlug.charAt(0).toUpperCase() + targetSlug.slice(1)}
          </h1>
        </header>
        
        <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold lg:prose-lg max-w-none">
          <MDXContent />
        </div>
        
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </span>
            <a
              href={`/about/${targetSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Edit this page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const availableSlugs = await getAvailableSlugs();
  
  return availableSlugs
    .filter((slug) => slug !== "about")
    .map((slug) => ({
      page: [slug],
    }));
}

export { compileMDX };
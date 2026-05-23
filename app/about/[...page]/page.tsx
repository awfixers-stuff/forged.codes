import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface Metadata {
  title?: string;
  [key: string]: unknown;
}

async function getMdxData(slug: string) {
  const contentDir = path.join(process.cwd(), "app/about/content");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(fileContent);
  return { metadata: metadata as Metadata, content };
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

interface AboutPageProps {
  params: Promise<{ page: string[] }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { page: slugArray } = await params;
  const slug = slugArray.join("/");

  const availableSlugs = await getAvailableSlugs();
  if (!availableSlugs.includes(slug)) {
    notFound();
  }

  const mdxData = await getMdxData(slug);
  if (!mdxData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <article className="container mx-auto px-4 pt-8 pb-12 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
            <a href="/about" className="hover:text-foreground transition-colors">
              About
            </a>
            <span>/</span>
            <span className="text-foreground capitalize">{slug}</span>
          </div>
          <h1 className="text-4xl font-display tracking-tight text-foreground sm:text-5xl">
            {mdxData.metadata.title || slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h1>
        </header>

        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-20 prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
          <MDXRemote
            source={mdxData.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
          />
        </div>

        <footer className="mt-16 pt-8 border-t border-foreground/15">
          <div className="flex justify-between items-center">
            <span className="text-sm text-foreground/60">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
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
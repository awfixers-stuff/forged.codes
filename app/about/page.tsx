import { notFound } from "next/navigation";
import { compileMDX } from "./[...page]/page";
import fs from "fs";
import path from "path";

async function getMdxData(slug: string) {
  const contentDir = path.join(process.cwd(), "app/about/content");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return { content: fileContent };
}

export default async function AboutPage() {
  const mdxData = await getMdxData("about");

  if (!mdxData) {
    notFound();
  }

  const MDXContent = compileMDX(mdxData.content);

  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About
          </h1>
        </header>

        <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold lg:prose-lg max-w-none">
          <MDXContent />
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
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
  return [{ page: [] }];
}
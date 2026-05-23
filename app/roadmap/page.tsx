import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { Phase, Milestone, FeatureList, FeatureItem, TimelineItem, MetricCard } from "./components/RoadmapMdx";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

async function getMdxData() {
  const filePath = path.join(process.cwd(), "app/roadmap/roadmap.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(fileContent);
  return { metadata, content };
}

const roadmapComponents = {
  ...mdxComponents,
  Phase,
  Milestone,
  FeatureList,
  FeatureItem,
  MetricCard,
  TimelineItem,
};

export default async function RoadmapPage() {
  const { content } = await getMdxData();

  return (
    <main className="min-h-screen">
      <article className="container mx-auto px-4 pt-8 pb-12 max-w-5xl">
        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-20 prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
          <MDXRemote
            source={content}
            components={roadmapComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return [{}];
}
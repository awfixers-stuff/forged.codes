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
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold lg:prose-lg max-w-none">
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
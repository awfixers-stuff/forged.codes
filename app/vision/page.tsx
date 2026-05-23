import MDXContent from "./content";

export default function VisionPage() {
  return (
    <main className="min-h-screen">
      <article className="container mx-auto px-4 pt-32 pb-12 max-w-5xl">
        <MDXContent />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return [{}];
}
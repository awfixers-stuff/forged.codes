import MDXContent from "./content";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-12 max-w-5xl">
        <MDXContent />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return [{}];
}
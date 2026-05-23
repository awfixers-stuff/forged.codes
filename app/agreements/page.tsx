import AgreementsContent from "./content"

export default function AgreementsPage() {
  return (
    <main className="min-h-screen">
      <article className="container mx-auto px-4 pt-32 pb-12 max-w-5xl">
        <AgreementsContent />
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  return [{}]
}
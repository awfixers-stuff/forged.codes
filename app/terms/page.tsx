import TermsContent from "./content"

export default function TermsPage() {
  return <TermsContent />
}

export async function generateStaticParams() {
  return [{}]
}
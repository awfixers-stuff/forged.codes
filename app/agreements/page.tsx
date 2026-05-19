import AgreementsContent from "./content"

export default function AgreementsPage() {
  return <AgreementsContent />
}

export async function generateStaticParams() {
  return [{}]
}
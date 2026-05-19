import PrivacyContent from "./content"

export default function PrivacyPage() {
  return <PrivacyContent />
}

export async function generateStaticParams() {
  return [{}]
}
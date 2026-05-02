import RoadmapContent from "./content";

export default function RoadmapPage() {
  return <RoadmapContent />;
}

export async function generateStaticParams() {
  return [{}];
}
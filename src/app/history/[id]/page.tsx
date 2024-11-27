import { HistoryView } from '@/views/history/view';

export default async function HistoryPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return <HistoryView userId={parseInt(id)} />;
}

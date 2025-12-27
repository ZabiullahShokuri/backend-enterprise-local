import { MainLayout } from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold">Welcome</h2>
      <p className="text-gray-600 mt-2">Enterprise dashboard starter</p>
    </MainLayout>
  );
}

import { MainLayout } from '@/components/layout/MainLayout';
import { DashboardPage } from '@/features/dashboard/DashboardPage';

export default function HomePage() {
  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  );
}

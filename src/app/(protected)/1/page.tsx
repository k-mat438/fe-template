import { Page1Container } from '@/features/page1/container/Page1Container';
import { Suspense } from 'react';

export default function Page1() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page1Container />
    </Suspense>
  );
}

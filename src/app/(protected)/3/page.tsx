import { Page3Container } from '@/features/page3/container/Page3Container';
import { Suspense } from 'react';

export default function Page3() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page3Container />
    </Suspense>
  );
}

import { Page2Container } from '@/features/page2/container/Page2Container';
import { Suspense } from 'react';

export default function Page2() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page2Container />
    </Suspense>
  );
}

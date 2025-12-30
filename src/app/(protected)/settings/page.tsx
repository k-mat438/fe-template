import { SettingsContainer } from '@/features/settings/container/SettingsContainer';
import { Suspense } from 'react';

export default function Settings() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsContainer />
    </Suspense>
  );
}

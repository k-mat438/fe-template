import { SettingsView } from '../view/SettingsView';

export async function SettingsContainer() {
  // TODO: データフェッチやビジネスロジックをここに実装
  const data = {
    title: 'Settings',
  };

  return <SettingsView data={data} />;
}

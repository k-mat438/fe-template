import { Page1View } from '../view/Page1View';

export async function Page1Container() {
  // TODO: データフェッチやビジネスロジックをここに実装
  const data = {
    title: 'Page 1',
  };

  return <Page1View data={data} />;
}

import { Page2View } from '../view/Page2View';

export async function Page2Container() {
  // TODO: データフェッチやビジネスロジックをここに実装
  const data = {
    title: 'Page 2',
  };

  return <Page2View data={data} />;
}

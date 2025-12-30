import { Page3View } from '../view/Page3View';

export async function Page3Container() {
  // TODO: データフェッチやビジネスロジックをここに実装
  const data = {
    title: 'Page 3',
  };

  return <Page3View data={data} />;
}

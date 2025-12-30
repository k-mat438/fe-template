'use client';

type Page2ViewProps = {
  data: {
    title: string;
  };
};

export function Page2View({ data }: Page2ViewProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
    </div>
  );
}

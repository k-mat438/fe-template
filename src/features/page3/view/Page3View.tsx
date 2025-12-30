'use client';

type Page3ViewProps = {
  data: {
    title: string;
  };
};

export function Page3View({ data }: Page3ViewProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
    </div>
  );
}

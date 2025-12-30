'use client';

type Page1ViewProps = {
  data: {
    title: string;
  };
};

export function Page1View({ data }: Page1ViewProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
    </div>
  );
}

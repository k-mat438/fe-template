'use client';

type SettingsViewProps = {
  data: {
    title: string;
  };
};

export function SettingsView({ data }: SettingsViewProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
    </div>
  );
}

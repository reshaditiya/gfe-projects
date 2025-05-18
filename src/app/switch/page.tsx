import { Switch } from '@/components/ui/switch';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6.25">
        <div className="flex gap-8">
          <Switch size="small" />
          <Switch size="small" checked />
        </div>
        <div className="flex gap-6">
          <Switch size="medium" />
          <Switch size="medium" checked />
        </div>
      </div>
    </main>
  );
}

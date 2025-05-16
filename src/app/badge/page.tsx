import { Badge, badgeVariantsConfig } from '@/components/ui/badge';

export default function Page() {
  const colors: Array<keyof typeof badgeVariantsConfig.color> = [
    'neutral',
    'error',
    'warning',
    'success',
    'brand',
  ];
  const sizes: Array<keyof typeof badgeVariantsConfig.size> = [
    'small',
    'medium',
    'large',
  ];

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-start gap-6.25">
        {colors.map((color) => (
          <div key={color} className="flex items-center gap-6">
            {sizes.map((size) => (
              <Badge key={color + size} color={color} size={size}>
                Label
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

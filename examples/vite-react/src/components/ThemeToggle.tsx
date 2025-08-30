import * as PrimitivesExports from '@eliseoeric/primitives';
const { Button } = PrimitivesExports;
import * as TypographyExports from '@eliseoeric/typography';
const { Typography } = TypographyExports;

interface ThemeToggleProps {
  currentTheme: string;
  onToggle: () => void;
}

export default function ThemeToggle({
  currentTheme,
  onToggle,
}: ThemeToggleProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <Typography tag="h2">Theme Switching Demo</Typography>
        <Button onClick={onToggle} color="secondary">
          Switch to {currentTheme === 'atlas' ? 'NordFox' : 'Atlas'} Theme
        </Button>
      </div>

      <div className="p-6 border border-gray-200 rounded-lg space-y-4">
        <Typography tag="p">
          Current theme: <strong className="capitalize">{currentTheme}</strong>
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
            <Typography tag="span">Primary Color</Typography>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            />
            <Typography tag="span">Secondary Color</Typography>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <Typography tag="span">Accent Color</Typography>
          </div>
        </div>

        <Typography tag="p" className="text-sm text-gray-600">
          Notice how the colors change when you switch themes. This is powered
          by CSS custom properties that are dynamically updated based on the
          data-brand attribute.
        </Typography>
      </div>
    </section>
  );
}

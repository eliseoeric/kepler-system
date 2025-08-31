import { useState } from 'react';
import * as PrimitivesExports from '@eliseoeric/primitives';
const { Button } = PrimitivesExports;
import * as FormsExports from '@eliseoeric/forms';
const { Input, Field, Label } = FormsExports;

import * as TypographyExports from '@eliseoeric/typography';
const { Typography } = TypographyExports;
import * as LayoutExports from '@eliseoeric/layout';
const { Logo, Footer } = LayoutExports;
// import { NavbarWithSearch } from '@eliseoeric/navigation';
import ThemeToggle from './components/ThemeToggle';
import VersionComparisonDemo from './components/VersionComparisonDemo';

function App() {
  const [currentTheme, setCurrentTheme] = useState('atlas');
  const [showAlert, setShowAlert] = useState(false);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'atlas' ? 'nordfox' : 'atlas';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-brand', newTheme);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <NavbarWithSearch /> */}

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Logo
            alt="Kepler Design System Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=300"
            href="/"
          />
          <Typography tag="h1">Kepler Design System</Typography>
          <Typography tag="h2" className="text-blue-600">
            Vite + React Example
          </Typography>
          <Typography tag="p" className="text-gray-600 max-w-2xl mx-auto">
            This Vite + React example demonstrates version coexistence patterns
            and showcases how multiple component versions can work side-by-side
            without conflicts.
          </Typography>
        </section>

        <ThemeToggle currentTheme={currentTheme} onToggle={toggleTheme} />

        <section className="space-y-6">
          <Typography tag="h2">Component Showcase</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography tag="h4" className="mb-3">
                Buttons
              </Typography>
              <div className="space-y-2 flex flex-col items-start">
                <Button color="primary">Primary Button</Button>
                <Button color="secondary">Secondary Button</Button>
                <Button outline>Outline Button</Button>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography tag="h4" className="mb-3">
                Forms
              </Typography>
              <div className="space-y-3">
                <Field>
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter your email" />
                </Field>
                <Button>Submit</Button>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography tag="h4" className="mb-3">
                Feedback
              </Typography>
              <div className="space-y-3">
                <Button onClick={() => setShowAlert(!showAlert)}>
                  Toggle Alert
                </Button>
                {showAlert && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Typography tag="p" className="text-blue-800">
                      This is an informational alert message demonstrating the
                      feedback package.
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <VersionComparisonDemo />

        <section className="space-y-4">
          <Typography tag="h2">Installation Guide</Typography>
          <div className="space-y-4">
            <div>
              <Typography tag="h4" className="mb-2">
                Individual Packages
              </Typography>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Typography tag="p" className="font-mono text-sm">
                  pnpm add @eliseoeric/primitives @eliseoeric/forms
                  @eliseoeric/feedback
                </Typography>
              </div>
            </div>

            <div>
              <Typography tag="h4" className="mb-2">
                All Packages
              </Typography>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Typography tag="p" className="font-mono text-sm">
                  pnpm add @eliseoeric/primitives @eliseoeric/forms
                  @eliseoeric/feedback @eliseoeric/layout @eliseoeric/navigation
                  @eliseoeric/typography @eliseoeric/data-display
                  @eliseoeric/tokens @eliseoeric/styles
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <Typography tag="h2">Key Features Demonstrated</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Typography tag="h4" className="text-blue-800 mb-2">
                Theme Switching
              </Typography>
              <Typography tag="p" className="text-blue-700">
                Live demonstration of Atlas ↔ NordFox theme switching using CSS
                custom properties.
              </Typography>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <Typography tag="h4" className="text-green-800 mb-2">
                Multi-Package Architecture
              </Typography>
              <Typography tag="p" className="text-green-700">
                Components imported from different domain-specific packages
                (primitives, forms, feedback, etc.).
              </Typography>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <Typography tag="h4" className="text-purple-800 mb-2">
                Token-Driven Styling
              </Typography>
              <Typography tag="p" className="text-purple-700">
                All styling uses CSS custom properties from design tokens - no
                hardcoded values.
              </Typography>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <Typography tag="h4" className="text-orange-800 mb-2">
                Modern Tooling
              </Typography>
              <Typography tag="p" className="text-orange-700">
                Built with Vite, React 18, TypeScript, and Tailwind CSS for
                optimal developer experience.
              </Typography>
            </div>
          </div>
        </section>
      </main>

      <Footer
        copyrightText="© 2024 All rights reserved."
        companyName="Kepler Design System"
      />
    </div>
  );
}

export default App;

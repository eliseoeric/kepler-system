'use client'

import { useState } from 'react'
import { Button } from '@eliseoeric/primitives'
import { Input, Field, Label } from '@eliseoeric/forms'
import { Alert } from '@eliseoeric/feedback'
import { Typography } from '@eliseoeric/typography'
import { Logo, Footer } from '@eliseoeric/layout'
import { NavbarWithSearch } from '@eliseoeric/navigation'

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('atlas')
  const [showAlert, setShowAlert] = useState(false)

  const toggleTheme = () => {
    const newTheme = currentTheme === 'atlas' ? 'nordfox' : 'atlas'
    setCurrentTheme(newTheme)
    document.documentElement.setAttribute('data-brand', newTheme)
  }

  return (
    <div className="min-h-screen bg-white">
      <NavbarWithSearch />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Logo />
          <Typography variant="h1">
            Kepler Design System
          </Typography>
          <Typography variant="body" className="text-gray-600 max-w-2xl mx-auto">
            A token-driven design system prototype demonstrating multi-brand theming, 
            multi-package architecture, and automated tooling. This Next.js example 
            showcases real-world usage patterns.
          </Typography>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <Typography variant="h2">
              Theme Switching Demo
            </Typography>
            <Button onClick={toggleTheme} variant="secondary">
              Switch to {currentTheme === 'atlas' ? 'NordFox' : 'Atlas'} Theme
            </Button>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg space-y-4">
            <Typography variant="body">
              Current theme: <strong>{currentTheme}</strong>
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Typography variant="h3">Components</Typography>
                <div className="space-y-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Typography variant="h3">Form Elements</Typography>
                <Field>
                  <Label>Email Address</Label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                  />
                </Field>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <Typography variant="h2">
            Component Showcase
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography variant="h4" className="mb-3">Buttons</Typography>
              <div className="space-y-2">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography variant="h4" className="mb-3">Typography</Typography>
              <div className="space-y-2">
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
                <Typography variant="body">Body text example</Typography>
                <Typography variant="caption">Caption text</Typography>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <Typography variant="h4" className="mb-3">Feedback</Typography>
              <div className="space-y-3">
                <Button onClick={() => setShowAlert(!showAlert)}>
                  Toggle Alert
                </Button>
                {showAlert && (
                  <Alert variant="info" title="Info Alert">
                    This is an informational alert message.
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <Typography variant="h2">
            Installation
          </Typography>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Typography variant="body" className="font-mono text-sm">
              pnpm add @eliseoeric/primitives @eliseoeric/forms @eliseoeric/feedback @eliseoeric/tokens
            </Typography>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
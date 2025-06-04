import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const helpSections = [
  {
    title: 'Help Guide',
    description: 'Comprehensive guide to using our POS system',
    href: '/help/guide',
    icon: '📖'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions and answers',
    href: '/help/faq',
    icon: '❓'
  },
  {
    title: 'Printer Help',
    description: 'Setup and troubleshooting for printers',
    href: '/help/printer',
    icon: '🖨️'
  },
  {
    title: 'API Documentation',
    description: 'Developer resources and API references',
    href: '/help/api-docs',
    icon: '⚡'
  }
];

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to your questions and get the help you need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {helpSections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{section.icon}</span>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
            <p className="text-muted-foreground mb-4">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
            <Link 
              href="/demo" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
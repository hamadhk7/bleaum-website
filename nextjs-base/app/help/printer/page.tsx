import { Typography } from '@/components/typography';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function PrinterHelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Typography>
          <h1>Printer Setup & Troubleshooting</h1>
          <p className="lead">
            Everything you need to know about setting up and maintaining your receipt printers.
          </p>

          <Alert className="my-6">
            <AlertDescription>
              <strong>Quick Tip:</strong> Make sure your printer is properly connected 
              and powered on before attempting any setup procedures.
            </AlertDescription>
          </Alert>

          <h2>Supported Printers</h2>
          <p>Our POS system supports a wide range of thermal receipt printers including:</p>
          <ul>
            <li>Epson TM series</li>
            <li>Star Micronics TSP series</li>
            <li>Zebra ZD series</li>
            <li>Brother TD series</li>
          </ul>

          <h2>Initial Setup</h2>
          <h3>1. Hardware Connection</h3>
          <p>Connect your printer via USB, Ethernet, or WiFi depending on your model.</p>

          <h3>2. Install Drivers</h3>
          <p>Download and install the latest drivers from your printer manufacturer&apos;s website.</p>

          <h3>3. Configure in POS</h3>
          <p>Navigate to Settings  Hardware Client to add and configure your printer.</p>

          <h2>Common Issues</h2>
          <h3>Printer Not Responding</h3>
          <ul>
            <li>Check power and cable connections</li>
            <li>Restart the printer and POS system</li>
            <li>Verify printer drivers are installed correctly</li>
          </ul>

          <h3>Poor Print Quality</h3>
          <ul>
            <li>Replace the thermal paper roll</li>
            <li>Clean the print head with isopropyl alcohol</li>
            <li>Check for debris in the paper path</li>
          </ul>

          <h3>Paper Jams</h3>
          <ul>
            <li>Turn off the printer before clearing jams</li>
            <li>Gently remove any stuck paper</li>
            <li>Ensure paper is loaded correctly</li>
          </ul>
        </Typography>
      </div>
    </div>
  );
} 
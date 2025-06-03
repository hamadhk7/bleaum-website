import { Typography } from '@/components/typography';

export default function HelpGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Typography>
          <h1>POS Help Guide</h1>
          <p className="lead">
            Complete guide to using your Bleaum POS system effectively.
          </p>
          
          <h2>Getting Started</h2>
          <p>
            Welcome to your Bleaum POS system! This guide will walk you through 
            all the features and functionality to help you get the most out of your system.
          </p>

          <h3>Dashboard Overview</h3>
          <p>
            Your dashboard provides a comprehensive view of your business operations, 
            including sales metrics, inventory levels, and customer activity.
          </p>

          <h3>Processing Orders</h3>
          <p>
            Learn how to efficiently process customer orders, apply discounts, 
            and handle different payment methods.
          </p>

          <h3>Inventory Management</h3>
          <p>
            Keep track of your products, manage stock levels, and set up 
            automated reorder points.
          </p>

          <h3>Customer Management</h3>
          <p>
            Build customer profiles, track purchase history, and manage 
            loyalty programs.
          </p>

          <h3>Reporting & Analytics</h3>
          <p>
            Generate detailed reports to understand your business performance 
            and make data-driven decisions.
          </p>
        </Typography>
      </div>
    </div>
  );
} 
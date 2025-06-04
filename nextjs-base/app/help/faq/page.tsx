import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking &apos;Forgot Password&apos; on the login screen and following the email instructions."
  },
  {
    question: "How do I add new products to my inventory?",
    answer: "Navigate to Inventory > Products and click 'Add Product'. Fill in the required information and save."
  },
  {
    question: "Can I process returns through the POS?",
    answer: "Yes, go to the Returns section in your POS interface and scan the original receipt to process returns."
  },
  {
    question: "How do I set up loyalty programs?",
    answer: "Go to Promotions > Loyalty Reward Settings to configure your loyalty program parameters."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support cash, card payments, virtual payments, gift cards, and various digital payment methods."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Quick answers to common questions about your POS system
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Didn&apos;t find what you were looking for?
          </p>
          <a 
            href="/demo" 
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
} 
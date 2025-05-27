'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I contact support?",
    answer: "You can contact our support team via the contact form on this page or by emailing support@example.com.",
  },
  {
    question: "What are your business hours?",
    answer: "Our team is available from Monday to Friday, 9 AM to 5 PM (EST).",
  },
  {
    question: "Where are you located?",
    answer: "We are located at 123 Wellness Avenue, Tranquil City, Earth.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer both in-person and virtual consultations. Please get in touch for more details.",
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

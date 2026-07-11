"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does shipping take?",
        answer:
            "Orders are processed within 24 hours and typically arrive within 3–7 business days depending on your location.",
    },
    {
        question: "Do you offer free shipping?",
        answer:
            "Yes! We offer free shipping on all orders over $99.",
    },
    {
        question: "Can I return or exchange a product?",
        answer:
            "Absolutely. You can return or exchange eligible items within 7 days of delivery in their original condition.",
    },
    {
        question: "Are your products authentic?",
        answer:
            "Yes. Every product sold on Kickstrom is 100% authentic and sourced from trusted brands and suppliers.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept Visa, MasterCard, American Express, PayPal, Stripe, and other secure payment methods.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, you'll receive a tracking number via email to monitor your delivery in real time.",
    },
];

export default function FAQSection() {
    return (
        <section className="bg-[#030712] container mx-auto py-20">
            <div className="mx-auto max-w-4xl px-6">
                <div className="mb-12 text-center">
                    <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-red-500">
                        FAQs
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Everything you need to know about shopping at Kickstrom.
                    </p>
                </div>

                <Accordion

                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-2xl border-3 border-white/10 bg-[#111827] px-6 transition hover:border-red-500/50"
                        >
                            <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="pb-4 text-gray-400 leading-7">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
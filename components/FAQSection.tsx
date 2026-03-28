"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/leagues";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  /** Small label above the title (e.g. "FAQ / Help"). Omit or set `showKicker={false}` to hide. */
  kicker?: string;
  /** When false, the kicker label is not shown (useful when `title` already includes the full heading). */
  showKicker?: boolean;
  /** Intro paragraph below the title; if omitted, a default subtitle is shown when `closing` is also omitted */
  intro?: string;
  /** Closing paragraph below the accordion */
  closing?: string;
  /** Emit FAQPage JSON-LD for search engines (default: true when `faqs` is non-empty) */
  jsonLd?: boolean;
}

function buildFaqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const FAQSection = ({
  faqs,
  title = "Frequently Asked Questions",
  kicker = "FAQ",
  showKicker = true,
  intro,
  closing,
  jsonLd = true,
}: FAQSectionProps) => {
  const faqJsonLd = useMemo(() => (jsonLd && faqs.length > 0 ? buildFaqPageJsonLd(faqs) : null), [faqs, jsonLd]);

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow max-w-3xl">
        {faqJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        ) : null}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {showKicker ? (
            <span className="inline-block text-sm font-medium text-secondary mb-3 tracking-wider uppercase">{kicker}</span>
          ) : null}
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{title}</h2>
          {intro ? (
            <p className="text-muted-foreground text-center md:text-center leading-relaxed">{intro}</p>
          ) : (
            <p className="text-muted-foreground">Everything you need to know</p>
          )}
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem value={`faq-${i}`} className="glass-card border-glass-border px-6 rounded-xl">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {closing ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-muted-foreground leading-relaxed border-t border-glass-border pt-10"
          >
            {closing}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
};

export default FAQSection;

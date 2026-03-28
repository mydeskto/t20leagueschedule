"use client";

import { HelpCircle } from "lucide-react";

import { globalFaqs } from "@/data/leagues";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function FaqDialogButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open FAQs"
          className="fixed right-4 top-[90%] -translate-y-1/2 z-[60] p-3 rounded-full bg-white text-black shadow-lg ring-1 ring-black/10 hover:bg-white/95 transition-colors cursor-pointer"
        >
          <HelpCircle className="h-6 w-6" />
        </button>
      </DialogTrigger>

      <DialogContent className="left-auto right-4 top-[8vh] translate-x-0 translate-y-0 h-[76vh] w-sm md:w-md p-5 rounded-2xl border border-black/10 bg-white text-black shadow-2xl">
        <DialogHeader>
          <DialogTitle>FAQs</DialogTitle>
        </DialogHeader>

        <div className="h-[calc(76vh-72px)] overflow-y-auto pr-1">
          <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-2">
            {globalFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-glass-border bg-white px-4 text-black"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}


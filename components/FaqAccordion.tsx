"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
            <button
              className="flex w-full items-center justify-between text-left font-semibold text-slate-900"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              {item.question}
              <span className="ml-3 text-emerald-700">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="mt-2 text-slate-600">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

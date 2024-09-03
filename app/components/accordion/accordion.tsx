"use client";

import React from "react";
import AccordionItem from "./accordion-item";
import { faqs } from "@/lib/data";
import { useState } from "react";

export default function Accordion() {
  const [clicked, setClicked] = useState<number>();

  const handleToggle = (index: number) => {
    setClicked(index);
  };

  return (
    <section>
      <h2>Accordion</h2>
      <ul className='flex flex-col gap-3 bg-gradient-radial from-[#6c9a5ac6] from-2% via-[#6c9a5a89] via-23% to-transparent to-45%'>
        {faqs.map((faq, index) => (
          <AccordionItem
            item={faq}
            key={index}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </ul>
    </section>
  );
}

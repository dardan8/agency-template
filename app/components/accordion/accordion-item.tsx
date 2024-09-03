"use client";

import { ChevronUp } from "lucide-react";
import { useRef } from "react";

type ItemProps = {
  item: {
    question: string;
    answer: string;
  };
  onToggle: () => any;
  active: boolean;
};

const AccordionItem = ({ item, onToggle, active }: ItemProps) => {
  const { question, answer } = item;
  const contentEl = useRef<HTMLDivElement>(null);
  return (
    <li
      onClick={onToggle}
      className={`flex flex-col px-5 py-4 rounded-xl w-full border border-zinc-100 text-zinc-600 cursor-pointer`}
    >
      <div
        className={`flex items-center justify-between ${active ? "mb-2" : ""}`}
      >
        <h3 className='text-lg font-bold'> {question} </h3>
        <ChevronUp
          className={`transition-all duration-300 ${
            active ? "" : "rotate-180"
          } `}
        />
      </div>
      <div
        ref={contentEl}
        className={`overflow-hidden transition-{height} duration-300 text-sm font-medium`}
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        {answer}
      </div>
    </li>
  );
};

export default AccordionItem;

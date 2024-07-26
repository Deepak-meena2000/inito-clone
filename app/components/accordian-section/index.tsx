"use client";
import React, { useState } from "react";
import styles from "./index.module.css";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className={styles.accordionItem}>
      <button
        onClick={onClick}
        className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
      >
        {title}

        {isOpen && <div className={styles.accordionContent}>{content}</div>}
      </button>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <span className="font-bold text-3xl">
          Your top questions <br></br>are answered
        </span>
      </div>
      <div className={styles.accordion}>
        {items.length > 0 && (
          <div className={styles.accordionRow}>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I create an event?",
      answer: "Simply sign up, go to your dashboard, and click 'Create Event'. You can add details, pricing, and publish instantly.",
    },
    {
      question: "Is Ingroove free to use?",
      answer: "Yes, creating an account is free. We only charge a small service fee on ticket sales.",
    },
    {
      question: "Can I manage multiple events?",
      answer: "Absolutely! You can manage as many events as you want all from your dashboard.",
    },
  ]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-overlay rounded-2xl shadow-lg border border-border/30 mt-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-primary">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-overlay_rr p-6 rounded-xl shadow-md cursor-pointer hover:bg-overlay transition"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-text">{faq.question}</h3>
              {openIndex === idx ? (
                <ChevronUp className="text-primary" />
              ) : (
                <ChevronDown className="text-primary" />
              )}
            </div>
            {openIndex === idx && (
              <p className="text-secondaryText mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

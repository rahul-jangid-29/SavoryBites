import React, { useState } from "react";

const faqs = [
  { question: "Do you offer vegan options?", answer: "Yes, we have a variety of vegan dishes available." },
  { question: "Is parking available?", answer: "Yes, we have a dedicated parking area for our customers." },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <button
              className="font-semibold w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;

import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
        <button
            onClick={onToggle}
            className="flex items-center justify-between w-full px-6 py-4 font-semibold text-left text-gray-800 bg-white hover:bg-gray-50 transition-all duration-200"
        >
            <span>{title}</span>
            <svg
                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        {isOpen && (
            <p style={{ padding: "10px 1rem" }}>
                {content}
            </p>
        )}
    </div>
);

function App() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    const data = [
        {
            title: "Room Prices in Jhandi and other places",
            content: " The room prices are fixed, but the total cost can vary based on the amenities and services you choose. For more detailed information, it’s best to contact us directly."

        },
        {
            title: "Conference Hall Available, Pricing Depends on Requirements",
            content: "Shanti Inn Jhandi offers a conference hall for programs. Pricing depends on the number of attendees and the amenities you need. Please reach out for a personalized quote based on your event requirements."
        },
        {
            title: "Custom Travel Packages Available Across India",
            content: "We offer travel packages across India, including Kashmir, Nepal, Bhutan, Sikkim, Darjeeling, and more. Contact us for customized packages based on your destination and travel preferences."
        },
    ];

    return (
        <div className=" ">
            <h1 className="text-2xl text-center font-bold mb-2 text-gray-800">Frequently Asked Questions</h1>
            <div className="w-[95%] max-w-[700px] mx-auto overflow-hidden p-4">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

import { useState } from 'react';

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Why 1 hour?",
            answer: "I'm still a college student, and I get quite very busy often. The goal is to build the habit, be consistent, and improve every night"
        },
        {
            question: "What materials do you study?",
            answer: "I study web dev on YouTube, Coursera, FreeCodeCamp, W3Schools."
        },
        {
            question: "Rules",
            answer: "Only time is record when: (1) The material study is related to web dev. (2) Building project is included. (3) Self Study Only: College studying, despite related to web dev, are not recorded"
        },
        {
            question: "Can I suggest a song for your next upload?",
            answer: "Sure! Comment on my latest post so I can see it!"
        },
        {
            question: "How many credentials do you have now?",
            answer: "I don't really count because I always get new one from time to time. Maybe around 100"
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <h3>{faq.question}</h3>
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
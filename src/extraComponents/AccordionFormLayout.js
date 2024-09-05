import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item  overflow-hidden">
            <button
                type="button"
                className={` accordion-header flex  justify-between gap-4 items-center w-full transition-all duration-300 ease-in-out out-of-range: `}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-md">{title}</span>
                <span
                    className={`pe-4 shrink-0 text-2xl leading-none transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <i class="fa-solid fa-caret-down"></i>
                </span>
            </button>
            {isOpen && (
                <div className="accordion-collapse">
                    <div className="accordion-content">{children}</div>
                </div>
            )}
        </div>
    );
};

const AccordionFormLayout = ({ activeContent, setActiveContent }) => {
    return (

        <div className="w-full relative z-10">
            <div className="accordion flex flex-col gap-4 text-md">
                <AccordionItem title="Form Layout">
                    <ul className=" ps-5 py-4 ">
                        <li className={` list-disc hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'vertical-form' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`} onClick={() => setActiveContent('vertical-form')}>
                            Vertical Form
                        </li>
                        <li className={` list-disc hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'horizontal-form' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`} onClick={() => setActiveContent('horizontal-form')}>
                            Horizontal Form
                        </li>
                    </ul>
                </AccordionItem>
            </div>
        </div>
    );
};

export default AccordionFormLayout;

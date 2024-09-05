import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const AccordionMisc = () => {
    return (

        <div className="w-full relative z-10">
            <div className="accordion flex flex-col gap-4 text-md">
                <AccordionItem title="Misc">
                    <ul className=" pl-5 py-4 ">

                        <Link to="/misc-error-page">
                            <li className='pb-4 list-disc '>
                                Error
                            </li>
                        </Link>


                        <Link to="/misc-under-maintenance-page">
                            <li className='list-disc'>
                                Under Maintenance
                            </li>
                        </Link>
                    </ul>
                </AccordionItem>
            </div>
        </div>
    );
};

export default AccordionMisc;

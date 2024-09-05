import React from 'react';
import AccordionMisc from '../extraComponents/AccordionMisc';
import AccordionFormLayout from '../extraComponents/AccordionFormLayout';
import AccordionAuthentication from '../extraComponents/AccordionAuthentication';


const Sidebar = ({ activeContent, setActiveContent }) => {
    return (
        <div className="w-1/5 h-screen p-4 text-[#686868] overflow-y-scroll scrollbar ">
            <div className='flex '>
                <img src="/assets/img/logo/favicon.png" alt='' className='mt-1 w-[30px] h-[30px]' />
                <h2 className="text-2xl font-bold mb-6 ps-3 text-[#566A7F]">Sidebar</h2>
            </div>
            <ul>
                <li
                    onClick={() => setActiveContent('dashboard')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'dashboard' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-home-circle pe-4 text-xl"></i>
                    Dashboard
                </li>
                <li
                    onClick={() => setActiveContent('layout')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-4 text-md ${activeContent === 'layout' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-layout user pe-4 text-xl"></i>
                    Layouts
                </li>
            </ul>
            <ul>
                <h4 className='uppercase ps-3 mb-4 mt-2 text-sm text-gray-400 font-medium'>Pages</h4>
                <li
                    onClick={() => setActiveContent('account-setting')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'account-setting' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-dock-top pe-4 text-xl"></i>
                    Account Settings
                </li>
                <li

                    className={` flex rounded-md cursor-pointer ps-3 py-2 mb-2 text-md `}
                >
                    <i className="bx bx-cube pe-4 text-xl"></i>
                    <AccordionAuthentication />
                </li>




                <li

                    className={` flex rounded-md cursor-pointer ps-3 py-2 mb-2 text-md `}
                >
                    <i className="bx bx-cube pe-4 text-xl"></i>
                    <AccordionMisc />
                </li>




            </ul>
            <ul>
                <h4 className='uppercase ps-3 mb-4 mt-2 text-sm text-gray-400 font-medium'>Components</h4>
                <li
                    onClick={() => setActiveContent('card')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'card' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-collection pe-4 text-xl"></i>
                    Cards
                </li>
                <li
                    onClick={() => setActiveContent('user-interface')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'user-interface' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-box pe-4 text-xl"></i>
                    User Interface
                </li>
                <li
                    onClick={() => setActiveContent('extended-ui')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'extended-ui' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-copy pe-4 text-xl"></i>
                    Extended UI
                </li>
                <li
                    onClick={() => setActiveContent('box-icons')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'box-icons' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-crown pe-4 text-xl"></i>
                    Boxicons
                </li>
            </ul>
            <ul>
                <h4 className='uppercase ps-3 mb-4 mt-2 text-sm text-gray-400 font-medium'>Forms & Tables</h4>
                <li
                    onClick={() => setActiveContent('form-element')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'form-element' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-detail pe-4 text-xl"></i>
                    Form Elements
                </li>
                <li

                    className={` flex rounded-md cursor-pointer ps-3 py-2 mb-2 text-md `}
                >
                    <i className="bx bx-cube pe-4 text-xl"></i>
                    <AccordionFormLayout activeContent={activeContent} setActiveContent={setActiveContent} />
                </li>

                <li
                    onClick={() => setActiveContent('table')}
                    className={`hover:bg-[#e3e4ff] rounded-md cursor-pointer ps-3 py-2 mb-2 text-md ${activeContent === 'table' ? 'bg-[#e3e4ff] text-[#696cff] font-semibold' : ''}`}
                >
                    <i className="bx bx-table pe-4 text-xl"></i>
                    Tables
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

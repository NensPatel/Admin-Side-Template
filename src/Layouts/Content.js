import React from 'react';
import Dashboard from '../Components/Dashboard';
import Layouts from '../Components/Layouts';
import AccountSetting from '../Components/AccountSetting';
// import Authentication from '../Components/Authentication';
// import Misc from "../Components/Misc"
import Cards from '../Components/Cards'
import UserInterface from "../Components/UserInterface"
import ExtendedUI from "../Components/ExtendedUI";
import BoxIcons from "../Components/BoxIcons";
import FormElement from "../Components/FormElement"
// import FormLayout from "../Components/FormLayout";
import Table from "../Components/Table"
import Support from '../Components/Support';
import Documentation from '../Components/Documentation';
import SearchNav from './SearchNav';
import Footer from './Footer';
import VerticalForm from '../Components/VerticalForm';
import HorizontalForm from '../Components/HorizontalForm';


const Content = ({ activeContent }) => {
    let content;

    switch (activeContent) {
        case 'dashboard':
            content = <Dashboard />;
            break;
        case 'layout':
            content = <Layouts />;
            break;
        case 'account-setting':
            content = <AccountSetting />;
            break;
        // case 'authentication':
        //     content = <Authentication />;
        //     break;
        // case 'misc':
        //     content = <Misc />
        //     break;
        case 'card':
            content = <Cards />
            break;
        case 'user-interface':
            content = <UserInterface />
            break;
        case 'extended-ui':
            content = <ExtendedUI />
            break;
        case 'box-icons':
            content = <BoxIcons />
            break;
        case 'form-element':
            content = <FormElement />
            break
        // case 'form-layout':
        //     content = <FormLayout />
        //     break;
        case 'vertical-form':
            content = <VerticalForm />
            break;
        case 'horizontal-form':
            content = <HorizontalForm />
            break;
        case 'table':
            content = <Table />
            break;
        case 'support':
            content = <Support />
            break;
        case 'documentation':
            content = <Documentation />
            break;
        default:
            content = <div>Welcome! Please select an option from the sidebar.</div>;
    }

    return (
        <div className="w-4/5 h-screen py-4 px-6 bg-[#F5F5F9] overflow-y-scroll scrollbar">
            <>
                <SearchNav />

                <div className='mt-7'>
                    {content}
                </div>

                <Footer />
            </>
        </div>
    );
};

export default Content;

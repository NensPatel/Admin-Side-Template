import React, { useState } from 'react';
import Sidebar from '../Layouts/Sidebar';
import Content from '../Layouts/Content';

const Home = () => {
    const [activeContent, setActiveContent] = useState('dashboard');

    return (
        <div className="flex">
            <Sidebar activeContent={activeContent} setActiveContent={setActiveContent} />
            <Content activeContent={activeContent} />
        </div>
    );
};

export default Home;

import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="text-gray-500  py-4 w-full bg-gray-100 mt-auto">
                <div className="container mx-auto">
                    <div className="font-medium">
                        © {currentYear}, made with ❤️
                         by <span className="font-bold">Nens Patel</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const MiscError = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl text-[#566A7F] mb-2">
                Page Not Found :(
            </h1>
            <p className="mb-5 text-gray-500">
                Oops! 😖 The requested URL was not found on this server.
            </p>
            <Link to="/">
                <button className="bg-[#7174ec] shadow-xl text-sm py-2 px-5 rounded-lg text-white mb-4">
                    Back to Home
                </button>
            </Link>
            <img
                src="/assets/img/illustrations/page-misc-error-light.png"
                alt="error page"
                className="w-[40%]"
            />
        </div>
    );
};

export default MiscError;

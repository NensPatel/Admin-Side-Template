import React from "react";
import { Link } from "react-router-dom";

const AuthLogin = () => {
    return (
        <div className="bg-[#F5F5F9] min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center shadow-lg p-8 bg-white rounded-lg w-full max-w-sm">
                <div className="flex items-center mb-6">
                    <img src="/assets/img/logo/favicon.png" alt="Logo" className="w-8 h-8" />
                    <h2 className="text-2xl font-bold ml-3 text-[#566A7F]">Sidebar</h2>
                </div>
                <div className="mb-6 text-start">
                    <h2 className="text-2xl font-semibold text-[#566A7F]">
                        Welcome to Sneat! 👋
                    </h2>
                    <p className="text-[#566A7F] text-base mt-2">Please sign in to your account and start the adventure</p>
                </div>
                <form className="w-full uppercase">
                    <div className="mb-6">
                        <label className="block text-xs font-medium text-[#566A7F] mb-2">
                            Email or Username
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#5F61E6] focus:outline-none"
                            placeholder="Enter Username or Email"
                        />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between">
                            <label className="block text-xs font-medium text-[#566A7F] mb-2">
                                Password
                            </label>
                            <Link className="text-xs capitalize text-[#4b54e0] tracking-wider">Forgot Password?</Link>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#5F61E6] focus:outline-none"
                                placeholder="********"
                            />
                            <i className="bx bx-hide absolute right-5 top-3"></i>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        <input type="checkbox" className="w-[20px]" />
                        <span className="text-sm capitalize">Remember Me</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#5F61E6] text-white font-semibold rounded-lg hover:bg-[#4b54e0] focus:outline-none focus:ring-2 focus:ring-[#5F61E6] focus:ring-opacity-50 transition-all ease-in-out duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthLogin;

import React from "react";

const Dashboard = () => {
    return (

        <div className="flex space-x-6 text-gray-400">
            <div className="w-[70%] flex rounded-lg shadow-lg bg-white">
                <div className="p-6 flex-grow">
                    <h2 className="text-xl text-[#696cff] mb-3">Congratulations Ashish! 🎉</h2>
                    <p className="mb-4">
                        You have done <span className="font-bold"> 72%</span> more sales today. Check your new badge in your profile.
                    </p>
                    <button className="text-[#696cff] border border-[#696cff] text-xs px-2 py-1 rounded-md hover:bg-[#696cff] hover:text-white hover:font-semibold transition-all duration-300 ease-in-out">
                        View Badges
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <img
                        src="/assets/img/illustrations/man-with-laptop-light.png"
                        alt=""
                        className="h-full pt-5 pe-2"
                    />
                </div>
            </div>


            <div className="w-[15%] p-4 rounded-lg shadow-lg bg-white">
                <div className="w-1/3 mb-4">
                    <img
                        src="../assets/img/icons/unicorns/chart-success.png"
                        alt="chart success"
                        className="rounded"
                    />
                </div>
                <div>
                    <span className="text-[#697A8D] font-semibold text-md">Profit</span>
                    <h2 className="text-[#566A7F] font-semibold text-3xl mb-2">$12,628</h2>
                    <small class="text-[#7DE048] font-semibold text-[16px] flex items-center">
                        <i class="bx bx-up-arrow-alt text-xl mr-1"></i> +72.80%
                    </small>

                </div>
            </div>

            <div className="w-[15%] p-4 rounded-lg shadow-lg bg-white">
                <div className="w-1/3 mb-4">
                    <img
                        src="../assets/img/icons/unicorns/wallet-info.png"
                        alt="chart success"
                        className="rounded"
                    />
                </div>
                <div>
                    <span className="text-[#697A8D] font-semibold text-md">Sales</span>
                    <h2 className="text-[#566A7F] font-semibold text-3xl mb-2">$4,679</h2>
                    <small class="text-[#7DE048] font-semibold text-[16px] flex items-center">
                        <i class="bx bx-up-arrow-alt text-xl mr-1"></i>+28.42%
                    </small>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;

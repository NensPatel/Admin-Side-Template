import React from "react";

const VerticalForm = () => {
  return <>
    <div className="text-[#8a939c] ">
      <h4 className="text-2xl mb-4 py-3">
        Forms / <span className="font-bold text-[#566A7F]">Vertical Layouts</span>
      </h4>
      <div class="grid grid-cols-2 gap-8">
        <div className="bg-white  rounded-lg shadow-lg text-[#566a7f] border-[#d9dee3] w-full">
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <h5 className="text-lg font-medium">Basic Layout</h5>
              <small className="text-slate-400 my-auto">Default Label</small>
            </div>
            <form className="uppercase">
              <div>
                <label className="text-xs">Full Name</label>
                <input type="text" className="w-full py-2 px-4 text-sm border rounded-lg outline-[#5F61E6] mt-2 mb-3" placeholder="Nens M Patel" />
              </div>
              <div>
                <label className="text-xs">Company</label>
                <input type="text" className="w-full py-2 px-4 text-sm border rounded-lg outline-[#5F61E6] mt-2 mb-3" placeholder="Google" />
              </div>
              <div className="relative">
                <label className="text-xs">Email</label>
                <div className="mt-2 mb-3">
                  <div className="flex items-center ">
                    <input
                      type="text"
                      className="w-full py-2 px-4 text-sm border rounded-lg outline-[#5F61E6]"
                      placeholder="heyy123"
                    />
                    <span className="absolute right-4 text-sm text-gray-500 lowercase">@example.com</span>
                  </div>
                  <span className="text-xs text-[#b4b2b2]">You can use letters, numbers & periods</span>
                </div>
              </div>
              <div className="relative">
                <label className="text-xs">Phone no</label>
                <div className="flex items-center mt-2 mb-3">
                  <span className="absolute left-4 text-sm text-gray-500 lowercase">+91</span>
                  <input
                    type="number"
                    className="w-full ps-12 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6]"
                    placeholder="9898000000"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs">Message</label>
                <div className="flex items-center mt-2 mb-3">
                  <textarea
                    rows="4"
                    className="w-full ps-4 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6] resize-none"
                    placeholder="Hii There!!"
                  />
                </div>
              </div>
              <div>
                <button className="bg-[#5F61E6] hover:bg-[#3f41c5] text-sm font-semibold tracking-widest text-white py-2 px-6 rounded-md transition-all ease-in-out duration-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white  rounded-lg shadow-lg text-[#566a7f] border-[#d9dee3] w-full">
          <div className="p-4">
            <div className="flex justify-between  mb-4">
              <h5 className="text-lg font-medium">Basic with Icons</h5>
              <small className="text-slate-400 my-auto">Merged input group</small>
            </div>
            <form className="uppercase">
              <div className="relative">
                <label className="text-xs">Full Name</label>
                <div className="flex items-center mt-2 mb-3">
                  <i class="bx bx-user absolute left-4"></i>
                  <input
                    type="text"
                    className="w-full ps-12 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6]"
                    placeholder="Nens M Patel"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-xs">Company</label>
                <div className="flex items-center mt-2 mb-3">
                  <i class="bx bx-buildings absolute left-4"></i>
                  <input
                    type="text"
                    className="w-full ps-12 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6]"
                    placeholder="Google"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-xs">Email</label>
                <div className="mt-2 mb-3">
                  <div className="flex items-center ">
                    <i class="bx bx-envelope absolute left-4"></i>
                    <input
                      type="text"
                      className="w-full ps-12 py-2 px-4 text-sm border rounded-lg outline-[#5F61E6]"
                      placeholder="heyy123"
                    />
                    <span className="absolute right-4 text-sm text-gray-500 lowercase">@example.com</span>
                  </div>
                  <span className="text-xs text-[#b4b2b2]">You can use letters, numbers & periods</span>
                </div>
              </div>
              <div className="relative">
                <label className="text-xs">Phone no</label>
                <div className="flex items-center mt-2 mb-3">
                  <i class="bx bx-phone absolute left-4"></i>
                  <span className="absolute left-12 text-sm text-gray-500 lowercase">+91</span>
                  <input
                    type="number"
                    className="w-full ps-20 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6]"
                    placeholder="9898000000"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-xs">Message</label>
                <div className="flex items-center mt-2 mb-3">
                  <i class="bx bx-message absolute left-4"></i>
                  <textarea
                    rows="4"
                    className="w-full ps-12 pr-4 py-2 text-sm border rounded-lg outline-[#5F61E6] resize-none"
                    placeholder="Hii There!!"
                  />
                </div>
              </div>
              <div>
                <button className="bg-[#5F61E6] hover:bg-[#3f41c5] text-sm font-semibold tracking-widest text-white py-2 px-6 rounded-md transition-all ease-in-out duration-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default VerticalForm;

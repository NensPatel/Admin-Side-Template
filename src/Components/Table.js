import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [action, setAction] = useState(null);

  const showAction = (index) => {
    setAction(action === index ? null : index);
  };

  const rows = [
    {
      icon:<i className="fa-brands fa-angular"></i>,
      project: "Angular Project",
      client: "Albert Cook",
      status: "Active",
      statusColor: "bg-[#e7e7ff] text-[#696cff]",
      avatars: ["assets/img/avatars/5.png", "assets/img/avatars/6.png", "assets/img/avatars/7.png"],
    },
    {
      icon: <i className="fa-brands fa-react"></i>,
      project: "React Project",
      client: "Barry Hunter",
      status: "Completed",
      statusColor: "bg-[#e8fadf] text-[#71dd37]",
      avatars: ["assets/img/avatars/5.png", "assets/img/avatars/6.png", "assets/img/avatars/7.png"],
    },
    {
      icon: <i className="fa-brands fa-vuejs"></i>,
      project: "VueJs Project",
      client: "	Trevor Baker",
      status: "Scheduled",
      statusColor: "bg-[#d7f5fc] text-[#03c3ec]",
      avatars: ["assets/img/avatars/5.png", "assets/img/avatars/6.png", "assets/img/avatars/7.png"],
    },
    {
      icon: <i className="fa-brands fa-bootstrap"></i>,
      project: "Bootstrap Project	",
      client: "Jerry Milton	",
      status: "Pending",
      statusColor: "bg-[#fff2d6] text-[#ffab00]",
      avatars: ["assets/img/avatars/5.png", "assets/img/avatars/6.png", "assets/img/avatars/7.png"],
    },
    
  ];

  return (
    <div className="text-[#8a939c] ">
      <h4 className="text-2xl mb-4 py-3">
        Tables / <span className="font-bold text-[#566A7F]"> Basic Table</span>
      </h4>
      <div className="bg-white rounded-lg shadow-lg text-[#566a7f] border-[#d9dee3] w-full">
        <h5 className="p-4 text-lg font-medium">Table Basic</h5>
        <div className="whitespace-nowrap overflow-x-auto w-full">
          <table className="table-auto w-full ">
            <thead>
              <tr className="uppercase">
                <th className="text-start ps-4 py-2">Project</th>
                <th className="text-start ps-4 py-2">Client</th>
                <th className="text-start ps-4 py-2">Users</th>
                <th className="text-start ps-4 py-2">Status</th>
                <th className="text-start ps-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border">
                  <td className="ps-3 py-3 w-[22%]">
                    {row.icon} {row.project}
                  </td>
                  <td className="ps-3 py-3">{row.client}</td>
                  <td className="">
                    <ul className="flex list-none">
                      {row.avatars.map((avatar, i) => (
                        <li key={i} className="avatar avatar-xs pull-up">
                          <img src={avatar} alt="avatar" className="rounded-full w-8" />
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="ps-3 py-3">
                    <span className={`${row.statusColor} px-2 py-1 text-sm rounded-md font-semibold uppercase`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="ps-3 py-3">
                    <div className="relative">
                      <button onClick={() => showAction(index)}>
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      {action === index && (
                        <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 p-2">
                          <Link to="#" className="flex items-center text-sm mb-2">
                            <i className="bx bx-edit-alt me-1"></i> Edit
                          </Link>
                          <Link to="#" className="flex items-center text-sm">
                            <i className="bx bx-trash me-1"></i> Delete
                          </Link>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

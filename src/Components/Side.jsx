import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHouse,
  faChartBar,
  faUserCheck,
  faMoneyCheckAlt,
  faStar,
  faFileAlt,
  faUserPlus,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Employees");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: faHouse },
    { name: "Employees", icon: faUser },
    { name: "Sales", icon: faChartBar },
    { name: "Attendance & Leaves", icon: faUserCheck },
    { name: "Payroll & Salary", icon: faMoneyCheckAlt },
    { name: "Performance & Appraisals", icon: faStar },
    { name: "HR Policies & Documents", icon: faFileAlt },
    { name: "Recruitment & Hiring", icon: faUserPlus },
    { name: "Notifications & Alerts", icon: faBell },
  ];

  return (
    <div className={`h-full bg-[#fafafa] shadow-lg transition-all ${isOpen ? "w-68" : "w-16"} duration-300`}>
      {/* Toggle Button */}
      <button
        className={`p-3 text-gray-700  w-full flex ${isOpen ? "justify-end pr-4 pt-4" : "justify-center"}`}
        onClick={() => setIsOpen(!isOpen)} 
      >
       {isOpen ? (
  <FontAwesomeIcon icon={faTimes} className="text-gray-700 cursor-pointer" />
) : (
  <FontAwesomeIcon icon={faBars} className="text-gray-700 cursor-pointer" />
)}
      </button>

      {/* Sidebar Menu */}
      <div className="px-2 pb-5">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`border-b border-gray-300 p-3 my-3 flex items-center gap-3 cursor-pointer transition-all  ${
              activeItem === item.name
                ? "bg-gradient-to-r from-[#F54B64] to-[#F78361] text-white "
                : "text-gray-700 hover:bg-gray-200 text-sm"
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className="w-8 flex justify-center">
              <FontAwesomeIcon icon={item.icon} fontSize={"20px"} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

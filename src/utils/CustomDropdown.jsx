import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const CustomDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay duration as needed
  };

  const handleDropdownCancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownClose}
      >
        <NavLink to={"/"}>PAGES</NavLink>
      </div>
      {isDropdownOpen && (
        <div
          className="absolute top-10 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]"
          onMouseEnter={handleDropdownCancelClose}
          onMouseLeave={handleDropdownClose}
        >
          <NavLink to={"/about-us"} className="text-[#757575] font-normal text-[16px] transition-all hover:text-black">
            About Us
          </NavLink>
          <NavLink to={"/our-team"} className="text-[#757575] font-normal text-[16px] transition-all hover:text-black">
            Our Team
          </NavLink>
          <NavLink to={"/hotel-review"} className="text-[#757575] font-normal text-[16px] transition-all hover:text-black">
            Hotel Reviews
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

import React from 'react'

const Navbar = ({ logo }) => {
  return (
    <div className="flex justify-between items-center pl-3 lg:pl-10 pr-2 py-2 lg:py-3">
      <div className="">
        <img src={logo} className="w-14 h-14" alt="logo" />
      </div>
      <b>My Portfolio</b>

      <div className="flex gap-5 lg:gap-7 items-center">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar
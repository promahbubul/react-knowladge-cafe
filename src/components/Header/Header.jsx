import profile from "../../assets/images/profile.png";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 w-10/12 m-auto border-b-2">
      <h1 className="text-4xl font-bold ">Knowladge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;

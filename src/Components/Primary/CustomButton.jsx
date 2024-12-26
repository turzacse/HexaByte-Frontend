import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center  mt-5"
    >
      <button
        onClick={() => navigate(link)}
        className="bg-indigo-900 text-white px-6 py-3 text-lg rounded-md hover:bg-indigo-700 transition"
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;

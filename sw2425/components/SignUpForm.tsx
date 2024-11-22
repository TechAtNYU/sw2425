import React from "react";

const SignUpForm: React.FC = () => {
  return (
    <div className="relative z-50 flex items-center p-4 rounded-md space-x-2 w-full max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow border border-gray-600 text-white placeholder-gray-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button className="bg-gray-300 text-black font-bold px-6 py-3 rounded-md hover:bg-gray-400 transition">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;

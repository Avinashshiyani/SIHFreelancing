import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('http://localhost:3000/login/check', {
        email,
        password
      });
      setResponse(res.data); // Set the response data on success
    } catch (error) {
      console.error('Error sending data', error);
      if (error.response && error.response.status === 401) {
        setResponse({ message: 'Invalid Credentials' }); // Set error message for 401
      } else {
        setResponse({ message: 'Failed to send data' }); // Set error message for other errors
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Login
        </h2>
        <hr className="p-3" />
        <form onSubmit={handleSubmit}> {/* Use onSubmit to handle form submission */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              required
            />
          </div>
          <div className="mb-8 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              required
           />
            <button
              type="button"
              className="absolute px-3 flex items-center justify-center right-0 top-[55%]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
              ) : (
                <AiOutlineEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Display Response Message */}
        {response && (
          
          <div className={`my-6 text-center text-md font-bold ${response.success ? 'text-black' : 'text-red-500'}`}>
            {response.message} !!!
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-gray-900 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

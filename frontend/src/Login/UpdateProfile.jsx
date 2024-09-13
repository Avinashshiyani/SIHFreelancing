import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import Logo from "../assets/workera_without_title_black.png";
import Axios from "axios";

let Update = () => {
  const { id } = useParams();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("Buyer");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Fetch user data when component loads
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`http://localhost:3000/update/${id}`);
        const { data } = response.data;
        console.log("API Response:", data);
        setFirstName(data.firstname || "");
        setLastName(data.lastname || "");
        setRole(data.role || "Buyer");
        setAddress(data.address || "");
        setCountry(data.country || "");
        setNumber(data.phone_number || "");
        setPassword(data.password || "");
        setEmail(data.email || "");
        // No need to set password or confirm password here
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setResponse({ success: false, message: "Failed to fetch user data" });
      }
    };
    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Axios.put(`http://localhost:3000/updated/${id}`, {
        firstname,
        lastname,
        role,
        address,
        country,
        number,
        email,
      });
      setResponse(data);
    } catch (error) {
      setResponse({ success: false, message: "Failed to update profile" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" className="h-[60px] w-[250px] mb-4" />
        </div>
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">
          Update Profile
        </h2>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit}>
          {/* First Name, Last Name, and Role Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="First Name"
                value={firstname || ""}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Role
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
          </div>

          {/* Email, Address, Country, and Phone Fields */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="123-456-7890"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password and Confirm Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute px-3 flex items-center justify-center right-0 top-[55%]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                ) : (
                  <AiOutlineEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold text-white bg-primary rounded-lg hover:bg-hover transition-colors duration-300"
          >
            Update Profile
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-md">
            <p
              className={`text-sm ${
                response.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {response.message}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="text-gray-900 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Update;

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


function Login({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }

    setErrorMessage("");

    const userInfo = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      
      console.log("Login Successful", res.data);
      toast.success("Loggedin Successfully");

      setEmail("");
      setPassword("");

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data.message || "Invalid email or password.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-center my-7">Login</h1>
      {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
      
      <button
        type="button"
        onClick={toggleForm}
        className="text-blue-600 mt-4 mx-auto"
      >
        Create an account
      </button>
    </form>
  );
}

export default Login;

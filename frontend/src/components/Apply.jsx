import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function Apply({ logedInUserId, id }) {
  
  const [authUser] = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4001/user/apply", {
        userId: logedInUserId,
        jobId: id,
      });

      console.log("Form Data Submitted:", formData);
      toast.success("Applied Successfully");
    } catch (error) {
      console.log("error", error);
    }
  };

  return(

    <>
      {authUser ? (
        <div className="apply-now-page h-screen flex justify-center items-center bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Apply Now</h2>
  
          <label className="block mb-2 text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md outline-none"
            placeholder="Your full name"
            required
          />
  
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 outline-none border rounded-md"
            placeholder="Your email"
            required
          />
  
          <label className="block mb-2 text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border outline-none rounded-md"
            placeholder="Your phone number"
            required
          />
  
          <label className="block mb-2 text-gray-700">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full p-2 mb-4 border outline-none rounded-md"
            placeholder="Write a short cover letter"
            rows="4"
          />
  
          <label className="block mb-2 text-gray-700">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full p-2 mb-4"
            required
          />
  
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          >
            Apply
          </button>
        </form>
      </div>
      ):(
        <div className='text-3xl font-bold my-10 items-center text-center '>Please login!</div>
      )}
    </>

  );
}

export default Apply;

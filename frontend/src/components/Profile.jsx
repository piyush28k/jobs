import React from 'react';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Profile() {

  const [authUser] = useAuth()
  const [jobs, setJobs] = useState(null)
  const [appliedJobs, setAppliedJobs] = useState(null)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async() => {
      try {
        const response = await axios.get("http://localhost:4001/user");
        const logedInUserId = JSON.parse(localStorage.getItem("user"))._id;
        const user = response.data.find((user) => user._id === logedInUserId);

        // console.log(user.jobs)
        
        setUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4001/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  useEffect(() => {
    if (jobs && user) {
      const filteredJobs = jobs.filter((job) => user.jobs.includes(job._id));
      setAppliedJobs(filteredJobs);
    }
  }, [jobs, user]);  

  return (
    <>
     {authUser ? (
      <div className="bg-gray-100 min-h-screen flex justify-center py-7">
      <div className="container mx-auto p-6">
        
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
            
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile" 
                className="object-cover w-full h-full"
              />
            </div>

            {/* User Information */}
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
              <p className="text-gray-600">@jon</p>
              <p className="mt-2 text-gray-700">
                Software Developer based in New York. Passionate about coding, technology, and innovation.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col mt-4 md:flex-row md:space-x-4">
                <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
                <p className="text-gray-600"><strong>Location:</strong> New York, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* About Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">About</h3>
            <p className="mt-4 text-gray-700">
              Experienced developer skilled in web and mobile development. John has worked on numerous projects for various industries and enjoys learning new technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <div className="flex flex-wrap mt-4 space-x-2">
              <span className="px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-yellow-200 text-yellow-700 rounded-full text-sm">Node.js</span>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">•</span>
              <p className="text-gray-700">Contributed to an open-source project on GitHub.</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">•</span>
              <p className="text-gray-700">Attended a tech conference in San Francisco.</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">•</span>
              <p className="text-gray-700">Published a new blog on JavaScript frameworks.</p>
            </li>
          </ul>
        </div>

        {/* applied jobs */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-7">Applied Jobs.</h3>
          <div className="box h-full w-full flex flex-col items-center justify-center gap-5">
            {appliedJobs?.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  // navigate(`Explore/job/${c._id}`);
                }}
                className="w-full border flex justify-between cursor-pointer items-center p-6 bg-white shadow-md rounded-xl"
              >
                <div className="h-full w-full flex">
                  <img
                    className="h-14 w-14 rounded-xl"
                    src={c.img}
                    alt={c.name}
                  />
                  <div className="ml-5">
                    <h1 className="text-xl font-bold">{c.role}</h1>
                    <h4>{c.name}</h4>
                  </div>
                </div>
                <div className="text-blue-700">apply</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     ):(
      <div className='text-3xl font-bold h-screen mt-48 items-center py-16 text-center '>Please login!</div>
     )}  
    </>
    
  );
}

export default Profile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function Explore() {
  const [jobs, setJobs] = useState([]);
  const [authUser] = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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

  const filteredData = jobs.filter((job) =>
    (authUser || job.login === " not needed") &&
    (job.role.toLowerCase().includes(search.toLowerCase()) ||job.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <div className="h-full w-screen bg-gray-100">
        <div className="h-72 w-full flex flex-col items-center justify-center border-b bg-white shadow-md gap-10">
          <h1 className="text-4xl font-bold">Explore Jobs</h1>
          <label className="px-3 w-1/2 py-2 border rounded-xl flex items-center gap-2 border-black">
            <input
              type="text"
              className="grow outline-none rounded-xl px-1 bg-transparent"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-gray-800 lg:block hidden px-7 py-2 rounded-xl text-white"
            >
              Search
            </button>
          </label>
        </div>

        <div className="h-full w-screen p-10">
          <h3 className="mb-10">
            We've found {filteredData.length} job postings
          </h3>

          <div className="box h-full w-full flex flex-col items-center justify-center gap-5">
            {filteredData.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  navigate(`job/${c._id}`);
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

          {!authUser ? (
            <div className="text-center mt-10">
              <p className="text-lg font-semibold">
                Login for more!
              </p>
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    </>
  );
}

export default Explore;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apply from './Apply';
import axios from 'axios';

function JobDetail() {
  const { id } = useParams();
  const logedInUserId = JSON.parse(localStorage.getItem("user"))?._id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/jobs`);
        const job = res.data.find((job) => job._id === id);
        setJob(job);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };
    getJob();
  }, [id]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 my-10">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-7 space-y-5 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <img className="h-20 w-20 rounded-xl" src={job?.img} alt="" />
          <div className="ml-0 sm:ml-5 mt-3 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold">{job?.role}</h1>
            <h4 className="text-md sm:text-lg text-slate-600">{job?.name}</h4>
          </div>
        </div>
        <button
          onClick={toggleModal}
          className="py-2 px-5 sm:px-7 bg-[#4869D7] text-white text-lg rounded-xl hover:bg-[#112469] transition-colors"
        >
          Apply now!
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-5">
        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        <div className="text-sm sm:text-base">{job?.location}</div>
      </div>

      <div className="flex items-center gap-2 sm:gap-5 my-2">
        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 7.23792L12.0718 14.338L4 7.21594V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM20 18H23L19 22L15 18H18V14H20V18Z"></path>
        </svg>
        <div className="text-sm sm:text-base">139 Applicants</div>
      </div>

      <div className="text-sm sm:text-lg flex items-center gap-1 my-2">
        <span className="font-bold text-xl sm:text-3xl">₹</span> {job?.salary}
      </div>

      <div className="text-sm sm:text-base mt-10 p-5 border border-gray-200 rounded-md">
        {job?.disc}
      </div>

      {isModalOpen && (
        <dialog open className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-box bg-white rounded-lg p-5 relative">
            <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              ✕
            </button>
            <Apply logedInUserId={logedInUserId} id={id} />
          </div>
        </dialog>
      )}
    </div>
  );
}

export default JobDetail;

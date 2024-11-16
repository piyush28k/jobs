import React from 'react';

function Blog() {
  const blogEntries = [
    {
      category: "JOB MAX",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://media.istockphoto.com/id/855198460/photo/business-handshake-in-the-office.jpg?s=612x612&w=0&k=20&c=WfKNXKiK5eQ3m4LJ0TPLc2aFuSLwotiS6la4Fb-VnDE=",
    },
    {
      category: "DOCUMENT CLOUD",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://media.istockphoto.com/id/1184906038/photo/employee-using-digital-tablet-at-warehouse.jpg?s=612x612&w=0&k=20&c=OYEF1DvqOYgtOsEqdtDvSEcm29wnXd4d89Fy9IwyGVM=",
    },
    {
      category: "3D",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://img.freepik.com/free-photo/employment-opportunity-hiring-jobs-icon_53876-121249.jpg?size=626&ext=jpg",
    },
    {
      category: "TYPOGRAPHY",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7VL45XLK7JKTZEDCDG2KHJEM6U.jpg",
    },
    {
      category: "JOB MAX",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://www.usbank.com/dam/images/wealth_management/perspectives/chart-job-growth-slow-nov-2024-16x9.jpg",
    },
    {
      category: "JOB MAX",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://www.discover.arkansas.gov/_images/ArkWorkforce.png",
    },
    {
      category: "JOB MAX",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/E5KQRDUDPBKOXBNF6M47ACUBOY.jpg",
    },
    {
      category: "JOB MAX",
      title: "Unlock the potential of Reels: Best practices for creative success using Adobe Creative...",
      description: "What makes a great Reels ad? Read up on the essential",
      date: "11-04-2024",
      image: "https://www.reuters.com/graphics/USA-STOCKS/akpeeamdkpr/joblessclaiims.png",
    },
    // ... Add more blog entries as needed
  ];

  return (
    <div className="wrapper w-full bg-white px-4 sm:px-8 lg:px-16">

      <div className="first flex flex-col lg:flex-row justify-between mt-16 lg:items-center">
        <div className="firstone flex flex-col max-w-lg mb-8 lg:mb-0 lg:ml-10">
          <h2 className="text-lg lg:text-xl">NEWS</h2>
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">Celebrating journey of Fresco</h1>
          <button className="bg-gray-500 text-white text-xs font-semibold uppercase rounded px-4 py-2 w-32 mb-4">
            Read the article
          </button>
          <p className="text-lg lg:text-2xl font-semibold italic">
            All the powerful new updates that unlock digital selecting and choosing career fields for everyone...
          </p>
        </div>

        <div className="firsttwo lg:mr-10">
          <img
            src="https://img.freepik.com/premium-photo/job-market-tray_276479-3720.jpg?size=626&ext=jpg"
            alt="Job Market Tray"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="second flex flex-col items-center bg-white mt-10 text-center">
        <h2 className="text-xl lg:text-2xl uppercase mb-8">Read the latest stories</h2>
        <div className="secondone flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10">
          <img
            src="https://media.gettyimages.com/id/1320686132/photo/businessman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=QmwS3Inhv2FLnSaxiHkMOfMLYLvgXeuKOGF8a0Hzb6A="
            alt="Working from Home"
            className="w-full max-w-xs lg:max-w-md rounded-lg object-cover"
          />
          <div className="mt-5 lg:mt-0 lg:text-left">
            <p className="text-lg font-semibold">
              GENERATE YOURSELF FULL SEARCHED AND EXPLORED DATA ABOUT JOB MARKET
            </p>
            <button className="bg-gray-300 text-gray-800 text-xs uppercase rounded-full px-4 py-2 mt-6">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="third mt-10">
        <h2 className="text-xl lg:text-2xl text-center uppercase mb-8">More from the Blog</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {blogEntries.map((entry, index) => (
            <div key={index} className="flex flex-col sm:flex-row w-full max-w-md p-4 rounded-lg border border-gray-200 bg-white">
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full sm:w-32 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
              />
              <div className="flex flex-col justify-between">
                <p className="text-xs text-gray-500">{entry.category}</p>
                <p className="text-lg font-semibold mt-1">{entry.title}</p>
                <p className="text-sm mt-1">{entry.description}</p>
                <p className="text-xs text-gray-500 mt-1">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="bg-gray-500 text-white text-xs font-semibold uppercase rounded px-6 py-2 mt-8 mx-auto block">
        Load more articles
      </button>
    </div>
  );
}

export default Blog;

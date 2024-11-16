import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scroller from "./Scroller";
import Eyes from "./eyes";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {/* page1 */}
        <div className="text-center items-center flex flex-col -mt-20">
          <motion.h1
            initial={{ x: "-1000px" }} // Start from -1000px to the left
            animate={{ x: "0px" }} // Animate to the center (0px)
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} // Smooth transition
            className="text-6xl font-bold"
          >
            Over <motion.span
            // delay={2000}
            delay="2000"
            initial={{ scale:'0px' }}
            animate={{ scale: "200px" }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="text-sky-700">5,000 jobs</motion.span> are
          </motion.h1>

          <motion.h1
            initial={{ x: "1000px" }} // Start from -1000px to the left
            animate={{ x: "0px" }} // Animate to the center (0px)
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} // Smooth transition
            className="text-6xl font-bold"
          >
            waiting for you
          </motion.h1>

          <motion.p
            initial={{ y: "100px", opacity: 0 }} // Start from 100px below with opacity 0
            animate={{ y: "0px", opacity: 1 }} // Animate to the center (0px) and fade in
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 }} // Add delay for smoother effect
            className="text-base w-96 mt-10"
          >
            Work with best company, hire the experienced professionals.
          </motion.p>
        </div>
      </div>

      {/* page2 */}
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold ml-10"
      >
        Most Popular categories
      </motion.h1>


      <div className="h-full w-full flex my-28 flex-col gap-52 items-center ">
        
      <div className="h-full w-full flex flex-col gap-10 md:gap-20 items-center my-10 md:my-28">
  {[
    {
      title: "Finance",
      description: "It encompasses a wide range of activities, including budgeting, forecasting, investing, lending, and managing assets and liabilities...",
      postings: "1720 Postings",
      imgSrc: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Marketing",
      description: "Involves identifying target audiences, understanding consumer behavior, and developing strategies to communicate a brand’s value effectively...",
      postings: "1720 Postings",
      imgSrc: "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: true,
    },
    {
      title: "IT Services",
      description: "Help organizations manage and optimize their technology infrastructure. These services can range from basic technical support to more complex services...",
      postings: "1720 Postings",
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Science",
      description: "Science AI holds great promise for advancing knowledge and innovation across all areas of science...",
      postings: "1720 Postings",
      imgSrc: "https://plus.unsplash.com/premium_photo-1676325101955-1089267548d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: true,
    },
    {
      title: "Tech",
      description: "IT involves the use of computers, software, networks, and databases to manage and process information...",
      postings: "1720 Postings",
      imgSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gastronomy",
      description: "In gastronomy, food presentation plays a significant role in how a dish is perceived and enjoyed...",
      postings: "1720 Postings",
      imgSrc: "https://images.unsplash.com/photo-1636044988130-d97aad86426c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: true,
    },
  ].map((section, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-auto w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center gap-6 ${
        section.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="img w-full md:w-1/2 h-56 md:h-96">
        <img
          className="h-full w-full object-cover object-center"
          src={section.imgSrc}
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-10">
        <h1 className="text-xl md:text-2xl font-bold my-3 md:my-5">{section.title}</h1>
        <h3 className="text-sm md:text-base">{section.description}</h3>
        <p className="mt-2 text-gray-600">{section.postings}</p>
      </div>
    </motion.div>
  ))}
</div>

        
        {/* third3 */}
      </div>

      <Scroller />

      <Eyes />
    </>
  );
}

export default Home;

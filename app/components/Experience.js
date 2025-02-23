"use client"

import React, {useState, useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Modal from "./Modal";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, staggerChildren: 0.1 } },
  };

  const experiences = [
    {
      id: 1,
      role: 'Cybersecurity Architect ',
      logo: '',
      company: '',
      date: '',
      location: '.',
      description: '',
      activity: 'Cyber & Cloud Security Deployment',
    },
    {
      id: 2,
      role: 'Information Security Officer',
      logo: '',
      company: '',
      date: '',
      location: 'UK',
      description: '',
      activity: 'Information Security Management'
    },
    {
      id: 3,
      role: 'Cybersecurity Analyst',
      logo: '',
      company: '',
      date: '',
      location: '',
      description: '',
      activity: 'Security Monitoring and Analysis'
    },
    {
      id: 4,
      role: 'Cybersecurity Engineer',
      logo: '',
      company: '',
      date: '',
      location: 'Lagos, Nigeria',
      description: '',
      activity: 'Security Configurations and Deployment',
    },
    {
      id: 5,
      role: 'Cybersecurity Mentor',
      logo: '',
      company: '',
      date: '',
      location: 'Lagos, Nigeria',
      description: '',
      activity: 'Mentoring Cybersecurity begineers and enthisiasts',
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center m-auto mx-auto my-36 lg:my-72"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 text-white mb-16"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="font-bold text-2xl lg:text-4xl">My Experiences</div>
        <div>My Experiences span across industries and diverse roles</div>
      </motion.div>
      {/* large screens */}
      <motion.div
        className="mx-auto hidden md:block relative w-4/5 min-h-screen items-center"
        variants={experienceVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`text-[#122455] flex items-center w-1/2 ${
              index % 2 === 0 ? "justify-end text-right mb-8" : "justify-start text-left ml-auto"
            }`}
            variants={experienceVariants}
            initial="hidden"
            animate={controls}
          >
          <div className="relative w-[90%] lg:w-full h-[100%] z-10 bg-gray-100 p-4 py-8 mx-auto lg:mx-8 my-8 rounded-xl shadow-md cursor-pointer" onClick={() => setSelectedExperience(experience)}>
              <div className="flex items-center gap-[10%] m-auto mb-2 justify-around">
                <div className="flex justify-center items-center gap-4">
                  
                  <div className="">
                    <div className='uppercase text-start font-semibold'>{experience.company}</div>
                    <div className='italic text-start'>{experience.role}</div>
                  </div>
                </div>
                <div>
                  <div className='text-end'>{experience.date}</div>
                  </div>
              </div>
              <div className="mt-2 text-sm lg:text-base text-gray-600">
                <ul className="leading-loose pl-6">
                    <li key={index} className=" py-4 text-start">
                    {experience.activity}
                    </li>
                </ul> 
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#122455] text-white w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{experience.id}</span>
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#122455] transform -translate-x-1/2"></div>
      </motion.div>
      {/* mobile starts */}
      <div
        className="mx-auto md:hidden relative p-4 min-h-screen items-center"
      >
        {experiences.map((experience, index) => (
         <div key={experience.id}>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#122455] text-white w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{experience.id}</span>
            </div>
          <div className="relative w-[90%] py-4 lg:w-full h-auto z-10 bg-gray-100 p-3 mx-auto lg:mx-8 my-4 rounded-xl shadow-md cursor-pointer" onClick={() => setSelectedExperience(experience)}>
              <div className="flex flex-col items-center gap-[10%] m-auto mb-2 justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="">
                    <div className='uppercase text-start font-normal'>{experience.company}</div>
                    <div className='italic text-start'>{experience.role}</div>
                  </div>
                </div>
                <div>
                  <div className='text-end'>{experience.date}</div>
                  </div>
              </div>
              <div className="mt-2 text-sm lg:text-base text-gray-600">
                <ul className="leading-loose pl-6">
                    <li key={index} className=" py-4 text-start">
                    {experience.activity}
                    </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* mobile ends */}
    </div>
  );
};

export default Experience;

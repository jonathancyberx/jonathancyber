"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewsletterSignup from "../components/NewsLeter";

const previousEngagements = [
  {
    id: 1,
    event: "Cybersecure Nigeria Conference 2024",
    location: "Abuja, Nigeria",
    description:
      "I shared insights on AI-Driven Strategies for Enhancing Human Cybersecurity Awareness in Nigeria.",
    topics: "Cybersecurity Awareness & Innovation, AI & Machine Learning in Cybersecurity",
    imageSrc: "/cybersecurenigeria.jpeg",
  },
  {
    id: 2,
    event: "Women in Cybersecurity 2024",
    location: "Virtual",
    description:
      "A panel discussion on goal stting in cybersecurity, alongside practical advice for overcoming these obstacles and building inclusive environments.",
    topics: "Diversity in Tech, Empowering Women in Cybersecurity",
    imageSrc: "/wicy.png",
  },
  {
    id: 3,
    event: "Africa CyberFest 2024",
    location: "Lagos, Nigeria",
    description:
      "I spoke about the importance of digital literacy in today’s interconnected world, emphasizing digital skills for the younger generation and how they can prepare for careers in cybersecurity.",
    topics: "Digital Literacy, Youth Empowerment in Tech",
    imageSrc: "/africacyberfest.jpg",
  },
  {
    id: 4,
    event: "Security Awareness Special Interest Group (SASIG)",
    location: "London, United Kingdom",
    description:
      "This event delves into the intricate relationship between SMEs’ risk perceptions and the effectiveness of their cybersecurity training. Drawing from extensive research, unveiling surprising insights into how SMEs view cyber risks and the impact of these perceptions on their training outcomes..",
    topics: "SME Cybersecurity,  Cyber Resilence",
    imageSrc: "/sasig.png",
  },
  {
    id: 5,
    event: "Limitless Conference",
    location: "London, United Kingdom",
    description:
      "I spoke about the importance of cybersecurity, how to stay vigilant and aviod falling for social engineering tactics to an audience of over 500 attendees.",
    topics: "Social Engineering, Youth Empowerment in Tech",
    imageSrc: "/limitless.jpg",
  },
  {
    id: 6,
    event: "AI Catalyst for Career & Business Success",
    location: "Lagos, Nigeria",
    description:
      "I spoke ot a group of founders and business owners on the importance of cybersecurity and how they can stay secure on a budget.",
    topics: "SME, Cybersecurity Innovation",
    imageSrc: "/aievent.jpg",
  },
];
const areasOfExpertise = [
  {
    id: 1,
    expertise: "Cybersecurity and Innovation",
    imageSrc: "/cybersecurity.jpg",
  },
  {
    id: 2,
    expertise: "Digital Literacy Advocacy",
    imageSrc: "/digital-literacy.jpg",
  },
  {
    id: 3,
    expertise: "Youth Empowerment through Technology",
    imageSrc: "/youth.jpeg",
  },
  {
    id: 4,
    expertise: "Risk Management and Cyber Resilience",
    imageSrc: "/cyber-resilience.png",
  },
  {
    id: 5,
    expertise: "Building Inclusive Technology Environments",
    imageSrc: "/inclusion.jpg",
  },
  {
    id: 6,
    expertise: "Business Innovation and SME Development",
    imageSrc: "/sme.webp",
  },
];

const Speaking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  useEffect(() => {
    document.title = "Jonathan Ayodele | Speaking";
  }, []);

  return (
    <div id="speaking">
      <Navbar />

      <div
        id="jaca"
        className=" text-gray-100 lg:min-h-screen h-full flex items-center justify-center"
      >
        <div
          className={`bg-gradient-to-l bg-[#122455] rounded-xl w-[90%] lg:w-4/5 m-auto min-h-[30rem] h-full lg:p-10 p-4`}
        >
          <motion.div
            className="text-2xl text-center md:text-4xl lg:p-8 leading-loose mb-4"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            Speaking Engagements
          </motion.div>
          <div className="pt-0 px-4 lg:gap-10 gap-4 flex flex-col lg:flex-row items-center justify-center pb-6">
            {/* Reorder elements for mobile */}
            <div className="lg:w-1/2 w-full lg:mb-0 text-center items-center lg:text-left order-2 lg:order-1"> {/* order-2 for mobile, order-1 for larger screens */}
               <div className="w-full sm:w-[30rem] leading-6 mx-auto lg:mx-0">
                <motion.div
                  className=" text-sm sm:text-base "
                  variants={textVariants}
                  initial=""
                  animate={controls}
                  ref={ref}
                >
                  As a seasoned cybersecurity professional, Jonathan has shared his 
                  insights on some of the
                  industry’s most pressing issues at conferences, webinars, and
                  international forums. Specializing in Cybersecurity, Digital
                  Literacy, and Youth Empowerment, His key areas include
                  cybersecurity innovation, SME, and the
                  intersection of technology, socio-economic development, and
                  career advancement. With interests in business
                  innovation, startups, and SME development, Jonathan brings a
                  unique blend of technical expertise and entrepreneurial
                  insight to his sessions. Audiences leave his sessions equipped
                  with actionable knowledge to navigate today’s digital
                  landscape with confidence, security, and a growth mindset.
                </motion.div>
              </div>
            </div>
            <div className="lg:w-1/2  items-center justify-center lg:block m-auto  w-full lg:mb-0 text-center lg:text-left">
              <motion.img
                src="/speaking.jpg"
                alt="my profile picture"
                className=" shadow-[#122455] rounded"
                variants={imageVariants}
                ref={ref}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#050E28] font-montserrat min-h-screen flex flex-col items-center justify-center mx-auto my-2 lg:my-2 lg:px-16 lg:my-22 p-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        {/* Areas of Expertise  */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-12">
            Topics I can Speak on
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExpertise.map((expertise, index) => (
              <div
                key={index}
                className="flex text-center flex-col flex-wrap items-center py-4 justify-center bg-transparent from-[#141e3a] to-[#122455] border border-gray-400 text-white rounded-xl shadow-lg"
              >
                <div className="my-4">
                  <Image
                    src={expertise.imageSrc}
                    alt={expertise.expertise}
                    className="rounded-3xl"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="text-base lg:text-lg font-semibold">
                  {expertise.expertise}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Previous Speaking Engagements Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-100 mt-12">
            Previous Speaking Engagemnts
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-12 p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {previousEngagements.map((engagement) => (
              <motion.div
                key={engagement.id}
                className=" bg-gradient-to-l from-[#141e3a] to-[#122455] text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <Image
                    src={engagement.imageSrc}
                    alt={engagement.event}
                    className="rounded-xl w-full h-48 object-cover"
                    width={350}
                    height={200}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {engagement.event}
                </h3>
                <p className="text-lg mb-2">{engagement.location}</p>
                <p className="text-base mb-4">{engagement.description}</p>
                <p className="text-base font-semibold">{engagement.topics}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Booking Section */}
        <div className="lg:p-12 p-4 py-16 pb-20">
          <div className="text-center mt-24 p-4 lg:p-16 mb-16 bg-gradient-to-l from-white to-[#90a1d5] rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-[#122455] mb-8">
              Contact Me for Bookings
            </h2>
            <p className="text-[#122455] text-lg mb-8">
              Interested in having Jonathan speak at your next event? Whether
              it’s a conference, summit, or corporate seminar, Jonathan’s talks
              provide actionable insights and thought leadership in the fields
              of cybersecurity, digital literacy, and youth empowerment. Reach
              out today to discuss your event!
            </p>
            <a
              href="https://forms.gle/QHDy8TakMrqbmzLS6"
              className="bg-[#8B0000] text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-[#f20034] transition duration-300"
              target="_blank"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
};

export default Speaking;

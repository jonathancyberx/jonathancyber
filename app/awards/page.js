"use client";

import Head from "next/head";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Image from "next/image";
import J1 from "../../public/awards8.jpg";
import Navbar from "../components/Navbar";
import NewsletterSignup from "../components/NewsLeter";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const awards = [
  {
    id: 1,
    title: "SME Africa 25under25 Awards (2019 & 2020)",
    date: "2019 & 2020",
    imageSrc: "/awards8.jpg",
    description:
      "Nominated in the technology category for outstanding contributions to the tech industry and support of small and medium enterprises in Africa.",
  },
  {
    id: 2,
    title: "UK Cyber Diversity Awards (2024)",
    date: "April 2024",
    imageSrc: "/diversityaward.png",
    description:
      'Recognized as "Highly Commended" for efforts in promoting diversity and inclusion within the UK sector.',
  },
  {
    id: 3,
    title: "One to Watch - UK Real Cyber Awards (2024)",
    date: "November 2024",
    imageSrc: "/onetowatch.png",
    description:
      "Nominated for and won this prestigious award, highlighting emerging leaders in cybersecurity.",
  },
];

const certifications = [
  "Certified Information Systems Security Professional (CISSP)",
  "CompTIA Security+",
  "ISO 27001 Lead Implementer",
  "Microsoft Cybersecurity Architect",
  "Microsoft Security Engineer",
  "Certified in Cybersecurity",
  "Digital Marketing",
];

const mediaMentions = [
  {
    title: "Nigerian Gets UK Cyber Diversity Award",
    link: "https://punchng.com/nigerian-gets-uk-cyber-diversity-award/",
    description:
      "Article highlighting my recognition at the UK Cyber Diversity Awards.",
  },
  {
    title: "Launch Ideas for Cyber Entrepreneurs",
    link: "https://www.plexal.com/launch-ideas-cyber-entrepreneurs/",
    description: "Feature on initiatives for empowering cyber entrepreneurs.",
  },
  {
    title: "Chevening Scholar Returns to Nigeria",
    link: "https://sunnewsonline.com/chevening-scholar-returns-to-nigeria-pledges-to-transform-ikorodu-community-with-tech-innovation/",
    description:
      "A story about my pledge to transform the Ikorodu community with tech innovation.",
  },
  {
    title: "Risk Management Event by SASIG",
    link: "https://www.thesasig.com/calendar/event/23-11-06-risk/",
    description:
      "Mention of my participation in the SASIG event discussing risk management.",
  },
  {
    title: "Increase in Insider Cyber Attacks in 2024",
    link: "https://dailytrust.com/nigeria-to-face-increase-in-insider-cyber-attacks-in-2024/",
    description:
      "Article on the rising threat of insider cyberattacks in Nigeria.",
  },
  {
    title: "Experts See Surge in Cyber Security Threats This Year",
    link: "https://guardian.ng/business-services/experts-see-surge-in-cyber-security-threats-this-year/",
    description:
      "Feature about the expected increase in cybersecurity threats.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

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
    document.title =
      "Jonathan Ayodele | Awards | Recognitions | Media Mentions";
  }, []);

  return (
    <div id="awards">
      <></>
      <Head>
        <title>Jonathan Ayodele | Awards | Recognitions | Media Mentions</title>
        <meta
          name="description"
          content="A list of my awards, recognitions, and media mentions in the field of cybersecurity and technology."
        />
      </Head>
      <Navbar />
      <div
        id="jaca"
        className=" text-gray-100 lg:min-h-screen h-full py-6 flex  items-center justify-center"
      >
        <div
          className={`bg-gradient-to-l bg-[#122455] align-center rounded-xl w-[90%] m-auto p-5  lg:p-10 lg:w-4/5`}
        >
          <motion.div
            className="text-2xl text-center md:text-4xl lg:p-8 leading-loose mb-4"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            Awards & Media
          </motion.div>
          <div className=" min-h-[20rem] h-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-5">
           
            <div className="lg:w-1/2  md:pt-0 items-center justify-center lg:block m-auto w-full lg:mb-0 text-center lg:text-left">
              <motion.img
                src="./awardJ.jpeg"
                alt="my profile picture"
                className=" shadow-[#122455] rounded"
                variants={imageVariants}
                // initial="hidden"
                // animate={controls}
                ref={ref}
              />
            </div>
            <div className="lg:w-1/2  w-full lg:mb-0 text-center items-center lg:text-left">
              <div className="w-full leading-6 mx-auto lg:mx-0">
                <motion.div
                  className="text-sm sm:text-base "
                  variants={textVariants}
                  initial=""
                  animate={controls}
                  ref={ref}
                >
                  I am honored to have received recognition for my contributions
                  to the fields of cybersecurity and digital literacy. My
                  commitment to empowering individuals and businesses has led to
                  several awards and nominations, reflecting my impact on the
                  community and industry. Notable accolades include:
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#050E28] font-montserrat min-h-screen flex flex-col items-center justify-center mx-auto my-2 lg:px-16 lg:my-22 p-8">
        {/* Awards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className=" bg-gradient-to-l from-[#141e3a] to-[#122455] text-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">
                <Image
                  src={award.imageSrc}
                  alt={award.title}
                  className="rounded-xl w-full h-48 object-cover"
                  width={350}
                  height={200}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{award.title}</h3>
              <p className="text-lg mb-2">{award.date}</p>
              <p className="text-base mb-4">{award.description}</p>
              <p className="text-base font-semibold">{award.topics}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Award Details */}
        {selectedAward && (
          <Modal onClose={() => setSelectedAward(null)}>
            <div className="p-6 bg-white text-black rounded-xl">
              <h2 className="text-xl font-bold mb-2">{selectedAward.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{selectedAward.date}</p>
              <p className="text-base">{selectedAward.description}</p>
            </div>
          </Modal>
        )}

        {/* Certifications Section */}
        <div className="text-center mt-24 p-8 mb-16 bg-gradient-to-l bg-white rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#122455] mb-8">
            Certifications
          </h2>
          <p className="text-[#122455] text-lg w-full md:w-3/4 text-center m-auto mb-8">
            These certifications are a testament to my commitment to continuous
            learning and staying ahead in cybersecurity and technology.
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#122455] text-[#F7F7F7] py-6 p-4 sm:p-8 rounded-xl shadow-md hover:bg-[#283b92] transition duration-300"
                variants={itemVariants}
              >
                <h3 className="text-lg font-normal sm:text-xl md:font-semibold">
                  {cert}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className=" mt-24 md:p-24 sm:p-8 py-12 mb-16 bg-[#122455] rounded-xl shadow-xl">
          <motion.h2
            className="text-center text-2xl sm:text-3xl font-bold text-[#F7F7F7] mb-8"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Media Mentions
          </motion.h2>

          <motion.p
            className="text-[#F7F7F7] text-base sm:text-lg w-3/4 text-center m-auto mb-8"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            I have been featured in several media outlets, sharing my insights
            on cybersecurity and community empowerment. Here&apos;s a selection
            of articles where my work has been highlighted.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {mediaMentions.map((mention, index) => (
              <motion.div
                key={index}
                className="bg-[#F7F7F7] m-auto text-[#122455] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-lg font-semibold pb-4 sm:text-2xl sm:font-semibold">
                  {mention.title}
                </h3>
                <p className="text-[#122455] text-sm mb-4">
                  {mention.description}
                </p>
                <a
                  href={mention.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-[#8B0000] mt-4 lg:mt-6 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
};

export default Awards;

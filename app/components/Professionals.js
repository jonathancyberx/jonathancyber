import TestimonialMarquee from "../components/TestimonialMarquee";
import { FaQuoteLeft } from "react-icons/fa";

const Professionals = () => {
  const testimonials = [
    {
      image: FaQuoteLeft,
      text: "Jonathan's training session on cybersecurity was transformative for our team. He has a unique ability to break down complex concepts into actionable steps, leaving us more confident in protecting our systems and data. His passion for digital literacy is truly inspiring.",
      name: "Abdul",
      role: "Founder, Hemshield",
    },
    {
      image: FaQuoteLeft,
      text: "Jonathan provided exceptional guidance during our cybersecurity assessment. His detailed recommendations not only improved our security posture but also boosted our clients’ trust in our services. He’s a trusted partner",
      name: "Ugbem J",
      role: "Chief Technology Officer",
    },
    {
      image: FaQuoteLeft,
      text: "Jonathan’s Scholarship coaching program is a must for anyone aiming for academic scholarships. His deep understanding of the application process, coupled with his tailored feedback, essay review and interview guidance, made my application stand out. I owe my success to his support.",
      name: "Oluwatoyin",
      role: "Scholarship Recipient",
    },
    {
      image: FaQuoteLeft,
      text: "Jonathan’s session on cybersecurity awareness was eye-opening for our team. He communicated complex topics with clarity and provided actionable steps that immediately improved our practices.",
      name: "Jennifer O.",
      role: "Team Lead",
    },
    {
      image: FaQuoteLeft,
      text: "Jonathan was instrumental in designing and deploying our cloud security solution. His attention to detail and ability to customize solutions for our business needs was outstanding.",
      name: "Adewale",
      role: "Solutions Architect",
    },
    {
      image: FaQuoteLeft,
      text: "Jonathan deep understanding of secure coding practices, threat modeling, and vulnerability management has been invaluable in building more resilient and secure software. His attention to details allows him give critical and important feedback on all his reviews.",
      name: "Buchi",
      role: "Software Engineer & Google Developer Expert",
    },
  ];

  return (
    <div className=" pt-72 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-32 text-white">Testimonials</h1>
      <TestimonialMarquee testimonials={testimonials} />
    </div>
  );
};

export default Professionals;
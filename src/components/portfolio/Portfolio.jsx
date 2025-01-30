import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/haraz.PNG",
    title: "Haraz Dental Group",
    desc: "A dental services platform offering easy appointment scheduling and dentist information.",
    details: [
      "Tools & Technologies: React JS, Next JS, Node JS, PostgreSQL, Google Map API, Redux, Jest, GitHub Actions.",
      "Built a responsive UI using Next.js, providing fast page loads and SEO optimization.",
      "Designed dynamic components for dentist profiles, services, and testimonials.",
      "Enabled online appointment booking for convenient scheduling.",
      "Integrated Google Maps for interactive location maps.",
      "Ensured mobile responsiveness and accessibility for users across all devices.",
    ],
    link: "https://www.harazdentalgroup.com/",
  },
  {
    id: 2,
    img: "/tenant.PNG",
    title: "Tenant Connect",
    desc: "A property inspection app providing onsite and remote inspection capabilities via video call.",
    details: [
      "Tools & Technologies: React, React Native, Node.js, AWS, WebRTC, Stripe.",
      "Implemented video calling functionality using WebRTC for seamless remote inspections.",
      "Added call recording and screen mirroring features, leveraging AWS S3 for secure storage.",
      "Integrated in-app purchases for both Android and iOS platforms to enable premium features.",
      "Utilized AWS services for scalable backend solutions and real-time data synchronization.",
    ],
    link: "https://tenantconnect.com.au/",
  },
  {
    id: 3,
    img: "/bitcoin.PNG",
    title: "Bitcoin Keeper App",
    desc: "A Bitcoin wallet application enabling secure storage of Bitcoin and inheritance planning for beneficiaries.",
    details: [
      "Tools & Technologies: React Native, Node JS, MongoDB, Redux, Jest, GitHub Actions.",
      "Revamped the app's UI for improved aesthetics and usability.",
      "Conducted extensive testing across various mobile screen sizes.",
      "Optimized frontend performance for a smoother user experience.",
      "Resolved critical data storage issues to enhance app reliability.",
    ],
    link: "https://bitcoinkeeper.app/",
  },
  {
    id: 4,
    img: "/property.PNG",
    title: "PropertyHub",
    desc: "A property listing platform offering real-time interactions, secure user authentication, and geolocation features.",
    details: [
      "Tools & Technologies: React, Node JS, MongoDB, JWT, Leaflet, Zustand, Socket.io, Jest, Cloudinary.",
      "Built an intuitive UI using React, enabling users to search, filter, and view properties with ease.",
      "Developed a secure backend with Node.js, MongoDB, and JWT for authentication and role-based access control.",
      "Managed state efficiently using Zustand for seamless data flow across the application.",
      "Enabled real-time notifications and messaging between users with Socket.IO.",
      "Optimized API performance for quick property search and detailed listing retrieval.",
    ],
    link: "https://github.com/Zohaibfazalkarim/e-property",
  },
  {
    id: 5,
    img: "/ecommerce.PNG",
    title: "Hasil",
    desc: "An ecommerce platform offering secure user authentication, efficient product management, and seamless payment processing.",
    details: [
      "Tools & Technologies: React, Node.js, MongoDB, JWT, Stripe, Redux, Jest.",
      "Built a user-friendly UI using React, enabling users to browse and add products to the cart.",
      "Implemented JWT for secure user authentication and account management.",
      "Integrated Stripe for smooth and secure checkout processes.",
      "Developed an admin dashboard for managing products, including adding, editing, and deleting items.",
      "Ensured responsiveness and accessibility for a seamless user experience across all devices.",
    ],
    link: "https://github.com/Zohaibfazalkarim/ecommerce_project/tree/master",
  },
];


const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.ul variants={textVariants}>
          {item.details.map((detail, index) => (
            <motion.li key={index} variants={textVariants}>
              {detail}
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          variants={textVariants}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};



const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;

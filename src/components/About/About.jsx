

// import React from "react";
// import "./About.scss";
// import { FaAward, FaLightbulb, FaLeaf } from "react-icons/fa";

// const About = () => {
//   const highlights = [
//     { 
//       title: "40+ Years of Expertise", 
//       text: "Trusted packaging solutions since 1985.", 
//       icon: <FaAward className="card-icon" /> 
//     },
//     { 
//       title: "Innovation", 
//       text: "Custom designs and modern polybag technology.", 
//       icon: <FaLightbulb className="card-icon" /> 
//     },
//     { 
//       title: "Sustainability", 
//       text: "Eco-conscious manufacturing practices.", 
//       icon: <FaLeaf className="card-icon" /> 
//     }
//   ];

//   return (
//     <section id="about" className="about">
//       <h2 className="about-title">About Us</h2>
//       <p className="about-intro">
//        Our Legacy
// SENIOC PLASTICS INDUSTRIES LTD. has been a trusted Canadian leader in packaging innovation. Our journey began four decades ago with a commitment to quality, durability, and customer trust. We’ve spent this time honing our craft, ensuring that every polybag and packaging solution we create is a hallmark of lasting excellence.
// What We Do
// We are your ultimate destination for high-quality packaging and printing. From polybags and shopping bags to grocery bags and custom-printed solutions, we offer a wide range of products tailored to your needs. Our dedication to precision and care ensures your packaging leaves a lasting impression.

//       </p>
//       <div className="about-cards">
//         {highlights.map((item, idx) => (
//           <div key={idx} className="about-card">
//             {item.icon}
//             <h3 className="card-title">{item.title}</h3>
//             <p className="card-text">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import "./About.scss";
import { FaAward, FaLightbulb, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    { 
      title: "40+ Years of Expertise", 
      text: "Trusted packaging solutions since 1985.", 
      icon: <FaAward className="card-icon" /> 
    },
    { 
      title: "Innovation", 
      text: "Custom designs and modern polybag technology.", 
      icon: <FaLightbulb className="card-icon" /> 
    },
    { 
      title: "Sustainability", 
      text: "Eco-conscious manufacturing practices.", 
      icon: <FaLeaf className="card-icon" /> 
    }
  ];

  return (
    <section id="about" className="about">
      <h2 className="about-title">About Us</h2>

      <div className="about-intro">
        <motion.h3
          className="about-subtitle"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Legacy
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          SENIOC PLASTICS INDUSTRIES LTD. has been a trusted Canadian leader in packaging innovation. 
          Our journey began four decades ago with a commitment to quality, durability, and customer trust. 
          We’ve spent this time honing our craft, ensuring that every polybag and packaging solution we create 
          is a hallmark of lasting excellence.
        </motion.p>

        <motion.h3
          className="about-subtitle"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          We are your ultimate destination for high-quality packaging and printing. 
          From polybags and shopping bags to grocery bags and custom-printed solutions, 
          we offer a wide range of products tailored to your needs. 
          Our dedication to precision and care ensures your packaging leaves a lasting impression.
        </motion.p>
      </div>

      <div className="about-cards">
        {highlights.map((item, idx) => (
          <div key={idx} className="about-card">
            {item.icon}
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

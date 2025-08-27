// import React from "react";
// import Slider from "react-slick";
// import "./Services.scss";

// const Services = () => {
//   const products = [
//     { title: "Butterfly Hole Bags", desc: "Durable and stylish bags with unique butterfly hole design.", img: "https://picsum.photos/500/300?random=1" },
//     { title: "Poly Tubing Rolls", desc: "Versatile rolls available in multiple sizes for packaging.", img: "https://picsum.photos/500/300?random=2" },
//     { title: "Punch Hole Bags", desc: "Strong and lightweight bags with easy carrying handle.", img: "https://picsum.photos/500/300?random=3" },
//     { title: "Custom Boutique Bags", desc: "Premium branded bags for a luxurious retail experience.", img: "https://picsum.photos/500/300?random=4" },
//     { title: "Gusseted Bags", desc: "Spacious bags with side gussets ideal for bulk storage.", img: "https://picsum.photos/500/300?random=5" },
//     { title: "Clear Poly Bags", desc: "Transparent bags ensuring product visibility and safety.", img: "https://picsum.photos/500/300?random=6" },
//     { title: "Custom Printed Bags", desc: "Tailor-made bags with your branding and unique designs.", img: "https://picsum.photos/500/300?random=7" }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <section id="services" className="services">
//       <h2 className="services-title">Our Products</h2>
//       <Slider {...settings}>
//         {products.map((item, idx) => (
//           <div key={idx} className="slide-wrapper">
//             <div className="product-card">
//               <img src={item.img} alt={item.title} className="product-img" />
//               <div className="product-info">
//                 <h3 className="product-title">{item.title}</h3>
//                 <p className="product-desc">{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import Slider from "react-slick";
import "./Services.scss";

import butterfly from "../../assets/productImages/ButterflyHoleBags.jpg";
import tubing from "../../assets/productImages/PolyTubingRolls.png";
import punch from "../../assets/productImages/PunchHoleBag.jpg";
import boutique from "../../assets/productImages/CustomBoutiqueBags.png";
import gusset from "../../assets/productImages/GussetedBags.webp";
import clear from "../../assets/productImages/ClearPolyBags.jpg";
import custom from "../../assets/productImages/CustomPrintedBags.png";

const Services = () => {
  const products = [
    { title: "Butterfly Hole Bags", desc: "Durable and stylish bags with unique butterfly hole design.", img: butterfly },
    { title: "Poly Tubing Rolls", desc: "Versatile rolls available in multiple sizes for packaging.", img: tubing },
    { title: "Punch Hole Bags", desc: "Strong and lightweight bags with easy carrying handle.", img: punch },
    { title: "Custom Boutique Bags", desc: "Premium branded bags for a luxurious retail experience.", img: boutique },
    { title: "Gusseted Bags", desc: "Spacious bags with side gussets ideal for bulk storage.", img: gusset },
    { title: "Clear Poly Bags", desc: "Transparent bags ensuring product visibility and safety.", img: clear },
    { title: "Custom Printed Bags", desc: "Tailor-made bags with your branding and unique designs.", img: custom }
  ];

 const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,   // desktop default
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200, // tablets / smaller laptops
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768, // most mobiles
      settings: { slidesToShow: 1 }
    }
  ]
};


  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Products</h2>
      <Slider {...settings}>
        {products.map((item, idx) => (
          <div key={idx} className="slide-wrapper">
            <div className="product-card">
              <img src={item.img} alt={item.title} className="product-img" />
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;

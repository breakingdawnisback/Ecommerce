import React from 'react';
import Hero from '../component/Hero';
import FiftyFiftySection from '../component/FiftyFiftySection';
import FullWidthBanner from '../component/FullWidthBanner'; // <-- Import

// ... sectionOneData remains the same
const sectionOneData = [
  {
    brand: "POLO RALPH LAUREN",
    title: "Sophisticated Sportswear",
    dek: "A versatile wardrobe for weekday commutes and weekend commitments",
    linkText: "Shop Now",
    link: "#",
    desktopImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_c02a_img.jpg",
    mobileImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_m_c02a_img.jpg"
  },
  {
    brand: "POLO RALPH LAUREN",
    title: "Seasonal Mix",
    dek: "Charming styles they'll love season after season",
    linkText: "Shop Now",
    link: "#",
    desktopImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_c02b_vid.jpg",
    mobileImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_m_c02b_vid.jpg"
  }
];

const sectionTwoData = [
  {
    brand: "RLX",
    title: "Sporty & Classic",
    dek: "Essential pieces for an active summer season",
    linkText: "Shop Women",
    link: "#",
    desktopImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_c04a_img.jpg",
    mobileImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07152025-eu-hp/0715_hp_m_c04a_img.jpg"
  },
  {
    brand: "RLX",
    title: "Summer Styles",
    dek: "Crafted for peak performance in warm weather",
    linkText: "Shop Men",
    link: "#",
    desktopImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202506/06122025-eu-hp/0610_hp_c04_img.jpg",
    mobileImgSrc: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202506/06122025-eu-hp/0610_hp_m_c04_img.jpg"
  }
]

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FiftyFiftySection sections={sectionOneData} />
      
      <FullWidthBanner 
        brand="POLO RALPH LAUREN"
        title="Dresses & Skirts"
        dek="Easy silhouettes in classic colors are effortless to wear"
        linkText="Explore Now"
        link="#"
        desktopImgSrc="https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07102025-eu-hp/0708_hp_c03_img.jpg"
        mobileImgSrc="https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_IN/v1753168929680/img/202507/07102025-eu-hp/0708_hp_m_c03_img.jpg"
      />

      <FiftyFiftySection sections={sectionTwoData} reverseOnMobile={true} />
    </main>
  );
};

export default HomePage;
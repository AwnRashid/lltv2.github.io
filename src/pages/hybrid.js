import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  hybridObjOne,
  hybridObjTwo,
  hybridObjThree,
  hybridObjFour,
} from '../components/InfoSection/Data';

function Hybrid() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...hybridObjOne} />
      <InfoSection {...hybridObjTwo} />
      <InfoSection {...hybridObjThree} />
      <InfoSection {...hybridObjFour} />
      <Footer />
    </>
  );
}

export default Hybrid;

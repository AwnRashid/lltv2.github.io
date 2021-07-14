import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  virtualObjOne,
  virtualObjTwo,
  virtualObjThree,
  virtualObjFour
} from '../components/InfoSection/Data';

function Virtual() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...virtualObjOne} />
      <InfoSection {...virtualObjTwo} />
      <InfoSection {...virtualObjFour} />
      <InfoSection {...virtualObjThree} />
      <Footer />
    </>
  );
}

export default Virtual;

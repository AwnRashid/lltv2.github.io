import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  inpersonObjOne,
  inpersonObjTwo,
  inpersonObjFour,
  inpersonObjThree,
} from '../components/InfoSection/Data';

function InPerson() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...inpersonObjOne} />
      <InfoSection {...inpersonObjTwo} />
      <InfoSection {...inpersonObjThree} />
      <InfoSection {...inpersonObjFour} />
      <Footer />
    </>
  );
}

export default InPerson;

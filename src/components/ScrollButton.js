import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap'
import './ScrollButton.css'
import scrollToTopIcon from '../assets/icons/scroll-to-top-64.png'

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   right: 7.5%;
   bottom: 2rem;
   height: 3rem;
   width: 3rem;
   border-radius: 50%;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   background-color: #5715c8;
   transition: scale 0.05s ease-out;
   &:hover {
    box-shadow: 0.25rem 0.25rem black;
    scale: 1.1;
   }
`
  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
      setOpacity((scrolled - 200) / 150)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none', opacity: opacity}} >
      <Image className='up-icon' src={scrollToTopIcon} fluid alt='Scroll to Top'/>
    </Button>
  );
}
  
export default ScrollButton;
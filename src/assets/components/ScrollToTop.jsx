import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect runs synchronously right before elements are painted to the screen
  useLayoutEffect(() => {
    // 1. Force the viewport instantly back to coordinate zero
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Prevents smooth-scroll hijacking when navigating
    });

    // 2. Kill historical calculations and refresh active triggers for the fresh view
    ScrollTrigger.clearMatchMedia(); 
    ScrollTrigger.refresh();

  }, [pathname]);

  return null;
};

export default ScrollToTop;
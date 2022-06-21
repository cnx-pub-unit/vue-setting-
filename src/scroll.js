import { gsap } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export const SCROLLER = '[data-scroll-container]';

window.addEventListener('load', () => {
    if(document.querySelector('[data-scroll-container]')) {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        scroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.addEventListener('refresh', () => setTimeout(() => { scroll.update(); }, 500));
        ScrollTrigger.refresh();
    }
});


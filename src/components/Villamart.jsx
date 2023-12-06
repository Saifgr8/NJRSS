import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import topImg from "../images/Top.jpeg";
import BotImg from "../images/Bot.jpeg";
import './Villamart.css';
import Lottie from "lottie-react";
import GIF from '../videos/Fall.json';

function Villamart() {
    const ref = useRef();
  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${topImg})`, backgroundSize: "cover" }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={4}
          style={{ backgroundImage: `url(${BotImg})`, backgroundSize: "cover" }}
        >
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 0.4, end: 2.5}}>
            <Lottie animationData={GIF} style={{height: '500px'}}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.2} speed={0.5} onClick={() => ref.current.scrollTo(2.5)}>
        <h1 style={{color: 'white', zIndex: '1'}}>Hello there</h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset={3.2} speed={1} onClick={() => ref.current.scrollTo(0)}>
        <h1 style={{color: 'white', zIndex: '1'}}>This is parallax</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
} 

export default Villamart;

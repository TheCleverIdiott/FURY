import React from 'react';
import Header from './Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';
const Hero = () => {
  
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
    return (
    <div className="hero">

        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
{/*the best ad*/}
            <div className="the-best-ad">
                <motion.div
                initial = {{left: mobile? "178px": '238px'}}
                whileInView = {{left:'8px'}}
                transition={{...transition, type:'tween'}}
                ></motion.div>
                <span>the best fitness app you can get</span>
            </div>

            {/*Hero Heading*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                        In here we will hep you to shape and build your ideal body and live your life up to the fullest
                    </span>
                </div>
            </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>2400</span>
                    <span>Steps</span>
                </div>
                <div>
                    <span>453</span>
                    <span>Calories Burnt</span>
                </div>
                <div>
                    <span>50+</span>
                    <span>Fitness Programmes</span>
                </div>
            </div>

            {/* hero button */}
            <div className="hero-buttons">
                <buttons className="btn"><a href="https://teamfuryus.github.io/Stats/">Dashboard</a></buttons>
                <buttons className="btn"><a href="https://teamfuryus.github.io/personalisedex/">View Your Personal Plan</a></buttons>
                <buttons className="btn"><a href="https://teamfuryus.github.io/SHOP/">SHOP</a></buttons>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'><a href="https://discord.gg/pve7Q5xqqV">Join Community</a></button>

            <motion.div 
            initial={{right:"-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 BPM</span>
            </motion.div>

            {/* Hero Images */}
            <img src={hero_image} alt className='hero-image' />
            <motion.img 
            initial={{right:"11rem"}}
            whileInView={{right:"20rem"}}
            transition={transition}
            src={hero_image_back} alt className='hero-image-back' />
            {/* calories */}
            <motion.div 
            initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}
            className='calories'>
                <img src={Calories} alt="" />
                <div>
                <span>Your BMI</span><span>23 (Normal)</span>
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Hero;
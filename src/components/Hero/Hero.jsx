import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/profile-pic.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "150px" : "238px" }}
            whileInView={{ left: "10px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best transformational coach in town</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>what seems impossible will soon become your warm-up</span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+100</span>
            <span>students</span>
          </div>
          <div>
            <span>+7</span>
            <span>certifications</span>
          </div>
          <div>
            <span>4</span>
            <span>specializatons</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">
            {" "}
            <Link to="join-us" span={true} smooth={true}>
              Get Started
            </Link>
          </button>
          {/* <button className="btn">Learn More</button> */}
        </div>
      </div>
      <div className="right-h">
        {/* <button className="btn">Join Now</button> */}

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        {/* <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>500 cals</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

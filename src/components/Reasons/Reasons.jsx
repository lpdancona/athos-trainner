import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1-1.png";
import image2 from "../../assets/image2-2.png";
import image3 from "../../assets/image3-3.png";
import image4 from "../../assets/image4-4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        {/* <img src={image4} alt="" /> */}
      </div>
      <div className="right-r">
        <span>some reasoms</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose me?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>
              Benefit from Athos' Brazilian Jiu-Jitsu expertise, blended with
              personalized strength training for a unique and effective fitness
              approach.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Achieve optimal results with Athos' tailored coaching, combining
              triathlon experience and extensive certifications in fitness and
              nutrition.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Unlock your potential with Athos' specialized knowledge in
              hypertrophy, fat loss, athletic conditioning, and nutrition
              guidance for holistic transformation.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Train confidently under Athos' guidance, backed by ACE, ISSA, and
              DNA-based fitness coaching, ensuring safe and expert-led workouts.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Embrace a well-rounded fitness journey guided by Athos,
              integrating BJJ, weight training, and nutrition insights to
              realize your goals.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Specializations: Hypertrophy/ Muscle Building Fat Loss Athletic
              Conditioning Nutrition
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Certifications: ACE Certified Personal Trainer (American Council
              on Exercise) ACE Fitness Nutrition Specialized ISSA Corrective
              Exercise Specialist ISSA Strength, Sport and Conditioning ISSA
              DNA-Based Fitness Coach ISSA Exercise Therapy Certification
              Canadian School of Natural Nutrition (student) CPR/AED Certificate
              level 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
export default function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pe0qf98",
        "template_apkvojo",
        form.current,
        "iyYUz5LEXep7q-K_F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const joinus = function () {
    alert("The form has been Submitted.");
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH ME?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" />
          <input type="email" name="user_email" placeholder="Your Email" />
          <input type="number" name="user_age" placeholder="How old are you?" />
          <input
            type="text"
            name="user_conditions"
            placeholder="Any Medical Conditions?"
          />
          <input
            type="text"
            name="user_online"
            placeholder="Online or in-person?"
          />
          <input
            type="email"
            name="user_email"
            placeholder="What's your fitness goal?"
          />
          <button className="btn btn-j" onClick={joinus}>
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

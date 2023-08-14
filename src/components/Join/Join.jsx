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
          <input type="email" name="user_email" placeholder="Your Email" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

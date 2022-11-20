import React from "react";

import classes from "./ContactPage.module.css";

import twitter from "../assets/images/twitter.png";
import insta from "../assets/images/insta.png";
import facebook from "../assets/images/facebook.png";

const reachMeData = [
  {
    value: "rk220217@gmail.com",
    content: "for any technical support",
    type: "mailto",
  },
  { value: "+917374091655", content: "for more information", type: "tel" },
  // { value: "rk220217@gmail.com", content: "to send your feedback" },
  // { value: "rk220217@gmail.com", content: "to work with us" },
];

function ContactPage() {
  return (
    <div className={classes.bg}>
      <div className={classes["contact-page-container"]}>
        <div>
          <div className={classes.card}>
            <h1 className={classes.heading}>Reach Out To Me</h1>

            {reachMeData.map((data) => (
              <div
                className={classes.text}
                onClick={() => (window.location = `${data.type}:${data.value}`)}
                key={`key-${data.value}`}
              >
                <h4 className={classes.subheading}>{data.value}</h4>
                <p className={classes.content}>{data.content}</p>
              </div>
            ))}
          </div>

          <div className={classes.footer}>
            <h4>stay in touch</h4>
            <div className={classes.icons}>
              <img src={twitter} alt="twitter icon" />
              <img src={insta} alt="insta icon" />
              <img src={facebook} alt="facebook icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

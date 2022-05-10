import React from "react";

import classes from "./ContactPage.module.css";

import twitter from "../assets/images/twitter.png";
import insta from "../assets/images/insta.png";
import facebook from "../assets/images/facebook.png";

const reachUsData = [
  { email: "support@kicksup.com", content: "for any technical support" },
  { email: "info@kicksup.com", content: "for more information" },
  { email: "feedback@kicksup.com", content: "to send your feedback" },
  { email: "jobs@kicksup.com", content: "to work with us" },
];

function ContactPage() {
  return (
    <div className={classes.bg}>
      <div className={classes["contact-page-container"]}>
        <div>
          <div className={classes.card}>
            <h1 className={classes.heading}>Reach Us at</h1>

            {reachUsData.map((data) => (
              <div
                className={classes.text}
                onClick={() => (window.location = `mailto:${data.email}`)}
              >
                <h4 className={classes.subheading}>{data.email}</h4>
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

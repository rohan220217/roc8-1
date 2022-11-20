import React from "react";

import classes from "./TeamPage.module.css";
import TeamCard from "../components/TeamCard";

import christiano from "../assets/images/christiano.jpg";
import ikercasillas from "../assets/images/ikercasillas.jpg";
import tonikroos from "../assets/images/tonikroos.jpg";
import zidane from "../assets/images/zidane.jpg";
import james from "../assets/images/james.jpg";
import twitter from "../assets/images/twitter.png";
// import insta from "../assets/images/insta.png";
import facebook from "../assets/images/facebook.png";
import medium from "../assets/images/medium.png";

function TeamPage() {
  const teamList = [
    {
      title: "Zidane",
      subTitle: "Leadership & Management",
      image: zidane,
      iconsList: [
        { name: "Linkedin", image: twitter },
        { name: "Medium", image: medium },
        { name: "Facebook", image: facebook },
      ],
    },
    {
      title: "Toni Kroos",
      subTitle: "Product Developer",
      image: tonikroos,
      iconsList: [
        { name: "Linkedin", image: twitter },
        { name: "Medium", image: medium },
      ],
    },
    {
      title: "Iker Casillas",
      subTitle: "Marketing Strategy",
      image: ikercasillas,
      iconsList: [{ name: "Medium", image: medium }],
    },
    {
      title: "James",
      subTitle: "Product Designer",
      image: james,
      iconsList: [
        { name: "Medium", image: medium },
        { name: "Facebook", image: facebook },
      ],
    },
    {
      title: "Cristiano",
      subTitle: "Financial Operation",
      image: christiano,
      iconsList: [
        { name: "Linkedin", image: twitter },
        { name: "Facebook", image: facebook },
      ],
    },
  ];
  return (
    <>
      <h1 className={classes.heading}>
        This project is solely made by me. In this project, I tried to showcase my React
        Context skill ;)
      </h1>
      <div className={classes.teamContainer}>
        <div className={classes.cards}>
          {teamList.map((team) => (
            <TeamCard
              key={`team-card-${team.title}`}
              title={team.title}
              subtitle={team.subTitle}
              image={team.image}
              alt={team.title}
              icons={team.iconsList}
            />
          ))}
        </div>
      </div>
      <h1 className={classes.bottomHeading}>and You ;)</h1>
    </>
  );
}

export default TeamPage;

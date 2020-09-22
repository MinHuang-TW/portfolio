import React from "react"
import { FiCode, FiFigma, FiUsers } from "react-icons/fi"

export default [
  {
    id: 1,
    icon: <FiUsers className="service-icon" />,
    title: "User-centered Research",
    text: `Research techniques (e.g. Contextmapping, co-creation, focus group, etc.) allow me to gain insights for different users and unlock their unfulfilled desires.`,
  },
  {
    id: 2,
    icon: <FiFigma className="service-icon" />,
    title: "User Experience Design",
    text: `Through design techniques (e.g. journey mapping, wireframing, prototyping, usability testing), I craft enjoyable user experience and interaction design.`,
  },
  {
    id: 3,
    icon: <FiCode className="service-icon" />,
    title: "Web Development",
    text: `HTML5, CSS3 (SASS, CSS modules, Styled components), JS ES6 (React) are front-end languages I mainly use, but express, node.js, MongoDB and firebase aren't new to me.`,
  },
]

import React from "react";
import styles from "./Logo.module.css";

const Icon = ({ size, color = '#ffffff' }) => (
  <svg
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 900 900"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle 
        cx="450" 
        cy="450" 
        r="450" 
        className={styles.st0} 
        style={{ fill: color }}
      />
    </g>
    <g className={styles.st1}>
      <rect
        x="664"
        y="221.3"
        width="48.5"
        height="457.4"
        className={styles.st2}
        style={{ fill: color }}
      />
      <rect
        x="334"
        y="221.3"
        width="48.5"
        height="457.4"
        className={styles.st2}
        style={{ fill: color }}
      />
      <g className={styles.st3}>
        <path
          // className={styles.st0}
          style={{ fill: color }}
          d="M37.2,629.5c7.3,16.7,15.6,32.9,24.8,48.5l319.5-456.3l-0.7-0.5H323L37.2,629.5z"
        />
      </g>
      <polygon
        className={styles.st4}
        style={{ fill: color }}
        points="391.5,678.7 711.5,221.8 710.8,221.3 653.1,221.3 332.8,678.7 	"
      />
    </g>
    <g className={styles.st1}>
      <rect
        x="658.9"
        y="221.3"
        width="60"
        height="457.4"
        className={styles.st5}
        style={{ fill: color }}
      />
      <polygon
        className={styles.st4}
        style={{ fill: color }}
        points="396.4,678.9 716.9,221.1 643.6,221.1 323.1,678.9 	"
      />
      <rect
        x="322.9"
        y="221.1"
        width="60"
        height="457.4"
        className={styles.st5}
        style={{ fill: color }}
      />
      <path
        className={styles.st4}
        style={{ fill: color }}
        d="M62.4,678.8l320.4-457.6h-73.2L32.2,617.4C40.7,638.7,50.8,659.2,62.4,678.8z"
      />
    </g>
    <rect
      x="634.9"
      y="222.5"
      className={styles.st6}
      width="80"
      height="455"
    />
    <polygon
      className={styles.st7}
      points="396.6,677 714.9,222.5 617.2,222.5 299,677 "
    />
    <rect x="298.9" y="222" className={styles.st6} width="80" height="455" />
    <path
      className={styles.st7}
      d="M61,676.4l317.8-453.9h-97.7L22.7,591.6C32.6,621.4,45.5,649.8,61,676.4z"
    />
  </svg>
);

export default Icon;
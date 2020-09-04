import React from "react"

const Logo = ({
  size,
  color = "rgba(255, 255, 255, 0.38)",
  strokeWidth = 5,
}) => {
  const PATH =
    "M83 49.5H62L6.78054 128C3.67824 118.561 2 108.477 2 98C2 44.9807 44.9807 2 98 2C151.019 2 194 44.9807 194 98C194 151.019 151.019 194 98 194C62.5781 194 31.637 174.816 15 146.27L65.784 74M83 49.5V121.839M83 49.5L65.784 74M65.784 74V146.5M65.784 146.5H86.5L137.5 73.75M65.784 146.5L133.5 49.5H154.5M154.5 49.5V146.5H137.5V73.75M154.5 49.5L137.5 73.75"

  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="-3 -3 206 206"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke={color} strokeWidth={strokeWidth} d={PATH} />
      <path id="icon-animation" strokeWidth={strokeWidth} d={PATH} />
    </svg>
  )
}

export default Logo

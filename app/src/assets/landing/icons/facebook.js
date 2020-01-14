import React from "react";
const SVG = ({
    style= {},
    fill = "#000",
    width = "100%",
    viewBox = "0 0 27 27"
}) => (
    <svg 
    width={width} 
    style={style} 
    height={width} 
    viewBox={viewBox} 
    xmlns="http://www.w3.org/2000/svg">
<path d="M25.509 0H1.49025C0.66825 0 0 0.667969 0 1.49062V25.5094C0 26.3321 0.66825 27 1.49025 27H13.5V16.3125H10.2728V12.375H13.5V9.4641C13.5 5.97656 15.9188 4.07812 19.0335 4.07812C20.5245 4.07812 22.1273 4.19063 22.5 4.23985V7.88205H20.0182C18.3232 7.88205 18 8.68357 18 9.86483V12.375H22.0358L21.5085 16.3125H18V27H25.509C26.3317 27 27 26.3321 27 25.5094V1.49062C27 0.667969 26.3317 0 25.509 0Z" fill="white"/>

</svg>

);

export default SVG;
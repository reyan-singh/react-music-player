import React from "react";

const RepeatIcon = ({ width = 14, height = 14 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.8171 3.93293L16.0672 0.183051C15.8885 0.00430634 15.6198 -0.049442 15.386 0.048055C15.1523 0.145552 14.9998 0.371795 14.9998 0.624287V2.49923H6.87503C3.07765 2.49923 0.000244141 5.57663 0.000244141 9.37401C0.000244141 9.719 0.280235 9.99899 0.625225 9.99899H3.12515C3.47014 9.99899 3.75013 9.719 3.75013 9.37401C3.75013 7.64782 5.14883 6.24911 6.87503 6.24911H14.9998V8.12405C14.9998 8.37655 15.1523 8.60529 15.386 8.70154C15.6198 8.79903 15.8885 8.74528 16.0672 8.56654L19.8171 4.81666C20.0609 4.57291 20.0609 4.17668 19.8171 3.93293Z" />
    <path d="M19.3747 9.99902H16.8748C16.5298 9.99902 16.2498 10.279 16.2498 10.624C16.2498 12.3502 14.8511 13.7489 13.1249 13.7489H5.00016V11.874C5.00016 11.6215 4.84766 11.3927 4.61392 11.2965C4.38018 11.2002 4.11268 11.254 3.93269 11.4327L0.182807 15.1826C-0.0609356 15.4264 -0.0609356 15.8226 0.182807 16.0664L3.93269 19.8162C4.11143 19.995 4.38018 20.0487 4.61392 19.9512C4.84766 19.8537 5.00016 19.6263 5.00016 19.3738V17.4988H13.1249C16.9223 17.4988 19.9997 14.4214 19.9997 10.624C19.9997 10.279 19.7197 9.99902 19.3747 9.99902Z" />
  </svg>
);

export default RepeatIcon;

// File: Badge.jsx

import React from "react";
import "../scss/BWBadge.module.scss";

export const BlackWhiteBadge = () => {
  return (
    <a href="https://eiannucci.github.io/" className="badge">
      <svg viewBox="0 0 210 210">
        <g stroke="none" fill="none">
          <path
            d="M22,104.5 C22,58.9365081 58.9365081,22 104.5,22 C150.063492,22 187,58.9365081 187,104.5"
            id="top"
          ></path>
          <path
            d="M22,104.5 C22,150.063492 58.9365081,187 104.5,187 C150.063492,187 187,150.063492 187,104.5"
            id="bottom"
          ></path>
        </g>
        <circle cx="105" cy="105" r="62" stroke="currentColor" strokeWidth="1" fill="none" />
        <text width="200" fontSize="20" fill="currentColor">
          <textPath startOffset="50%" textAnchor="middle" alignmentBaseline="middle" xlinkHref="#top">
            Special offers
          </textPath>
        </text>
        <text width="200" fontSize="20" fill="currentColor">
          <textPath startOffset="50%" textAnchor="middle" alignmentBaseline="middle" xlinkHref="#bottom">
            only today
          </textPath>
        </text>
      </svg>
      <span>Black Friday</span>
    </a>
  );
};

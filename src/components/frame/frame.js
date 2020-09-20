import React from 'react';

import './frame.css';

const colorOption = (status, hover) => {
  if (status === 'default' && !hover) {
    return "#1698D9"
  }
  if (status === 'default' && hover) {
    return "#2EA8E6"
  }
  if (status === 'selected' && !hover) {
    return "#D91667"
  }
  if (status === 'selected' && hover) {
    return "#E52E7A"
  }
  if (status === 'disabled') {
    return "#B3B3B3"
  }
}

const Frame = ({status, hover}) => {

  const color = colorOption(status, hover);

  return (
    <svg className="frame" width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"/>
      </mask>
      <path d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill={color} mask="url(#path-1-inside-1)"/>
    </svg>
  )
}

export default Frame;
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Path = styled.path`
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 5px;
  fill-rule: evenodd;
  fill: url("#${(props) => props.id}");
`;

function Star({ fillPercent }) {
  const [id] = useState(uniqid());

  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id={id}>
          <stop offset={fillPercent} stopColor="black" />
          <stop offset="0%" stopColor="white" />
        </linearGradient>
      </defs>
      <Path id={id} d="M38.91,36.22a1.26,1.26,0,0,0,1.43-1c1.23-3.94,9.34-29.69,9.34-29.69A2.42,2.42,0,0,1,50.52,4a1.82,1.82,0,0,1,2.78,1.1l9.49,30.15a1.13,1.13,0,0,0,1.3,1l31.33,0a2.1,2.1,0,0,1,1.94.85,1.65,1.65,0,0,1-.56,2.45L71.39,57.32a1.61,1.61,0,0,0-.73,2.22L80.32,88.3c.34,1,.81,2.08-.32,2.91s-2,.08-2.86-.57L53.51,73.16c-2-1.45-1.94-1.46-3.85,0L25.81,90.79a5.6,5.6,0,0,1-1.07.66A1.59,1.59,0,0,1,23,91.12a1.54,1.54,0,0,1-.56-1.73L32.56,59c.18-.53.25-.92-.32-1.32L6.68,39.78C5.61,39,5.25,38.3,5.52,37.46s.92-1.26,2.25-1.26Z" transform="translate(-3.43 -1.7)" />
    </svg>
  );
}

Star.propTypes = {
  fillPercent: PropTypes.string.isRequired, // must be written as 0% - 100%
};

export default Star;

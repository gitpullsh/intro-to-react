import React from 'react';

const Heart = ({ onLike, isLiked }) => (
<svg width="35px" height="35px" onClick={onLike}>
<g id="ukSmNi.tif">
	<g>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      stroke={isLiked ? '' : '#444444'} 
      strokeWidth={isLiked ? '' : '2'} 
      fill={isLiked ? '#BE1E2D' : '#FFFFFF'} 
      d="M15.257,4.023c1.144-1.331,2.521-2.197,4.175-2.63c4.502-1.18,9.196,1.968,9.786,6.566c0.334,2.619-0.48,4.915-1.98,7.011
			c-1.578,2.208-3.52,4.08-5.633,5.756c-1.95,1.548-4,2.971-6.001,4.455c-0.236,0.176-0.416,0.188-0.675,0.017
			c-3.432-2.278-6.703-4.755-9.571-7.727c-1.341-1.39-2.594-2.865-3.348-4.672C0.918,10.181,0.812,7.575,2.304,5.05
			c2.72-4.602,9.117-5.243,12.72-1.282C15.089,3.84,15.155,3.912,15.257,4.023z"
    />
	</g>
</g>
</svg>
);

export default Heart;

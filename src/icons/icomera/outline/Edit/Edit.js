import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinejoin="round">
            <polygon points="4 20 10 18 20 8 16 4 6 14"></polygon>
            <line x1="6" y1="14" x2="10" y2="18"></line>
        </g>
    </SVG>
)
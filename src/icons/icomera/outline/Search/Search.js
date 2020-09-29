import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none">
            <line x1="20" y1="20" x2="15" y2="15"></line>
            <circle cx="10.5" cy="10.5" r="6.5"></circle>
        </g>
    </SVG>
)
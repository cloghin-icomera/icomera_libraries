import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <circle cx="12" cy="12" r="8"></circle>
            <polyline points="12 7 12 12 16 12"></polyline>
        </g>
    </SVG>
)
import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <rect x="4" y="6" width="16" height="14" rx="1"></rect>
            <line x1="5" y1="11" x2="19" y2="11"></line>
            <line x1="7" y1="4" x2="7" y2="7"></line>
            <line x1="17" y1="4" x2="17" y2="7"></line>
        </g>
    </SVG>
)
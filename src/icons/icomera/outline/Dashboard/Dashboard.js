import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
            <circle cx="7" cy="7" r="3"></circle>
            <line x1="14" y1="15" x2="14" y2="20"></line>
            <line x1="17" y1="18" x2="17" y2="20"></line>
            <line x1="20" y1="14" x2="20" y2="20"></line>
        </g>
    </SVG>
)
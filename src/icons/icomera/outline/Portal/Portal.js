import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <rect x="4" y="4" width="16" height="16" rx="1"></rect>
            <line x1="12" y1="10" x2="20" y2="10"></line>
            <line x1="4" y1="14" x2="12" y2="14"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
        </g>
    </SVG>
)
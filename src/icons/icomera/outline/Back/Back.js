import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <polyline points="10 4 3 12 10 20"></polyline>
            <line x1="3" y1="12" x2="21" y2="12"></line>
        </g>
    </SVG>
)
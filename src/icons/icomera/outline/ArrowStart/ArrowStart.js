import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <line x1="6" y1="6" x2="6" y2="18"></line>
            <polyline points="18 6 12 12 18 18"></polyline>
        </g>
    </SVG>
)
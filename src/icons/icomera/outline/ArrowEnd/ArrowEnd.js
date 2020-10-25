import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <polyline points="6 6 12 12 6 18"></polyline>
            <line x1="18" y1="6" x2="18" y2="18"></line>
        </g>
    </SVG>
)
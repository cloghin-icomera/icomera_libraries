import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <line x1="19" y1="5" x2="5" y2="19"></line>
            <line x1="5" y1="5" x2="19" y2="19"></line>
        </g>
    </SVG>
)
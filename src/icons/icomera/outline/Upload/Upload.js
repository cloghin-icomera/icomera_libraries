import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <path d="M16,18 L18,18 C19.1045695,18 20,17.1045695 20,16 L20,6 C20,4.8954305 19.1045695,4 18,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,16 C4,17.1045695 4.8954305,18 6,18 L8,18 L8,18"></path>
            <polyline points="8 13 12 9 16 13"></polyline>
            <line x1="12" y1="10" x2="12" y2="20"></line>
        </g>
    </SVG>
)
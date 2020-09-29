import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <path d="M12,7 L6,7 C4.8954305,7 4,7.8954305 4,9 L4,18 C4,19.1045695 4.8954305,20 6,20 L15,20 C16.1045695,20 17,19.1045695 17,18 L17,12 L17,12"></path>
            <polyline points="14 4 20 4 20 10"></polyline>
            <line x1="20" y1="4" x2="10" y2="14"></line>
        </g>
    </SVG>
)
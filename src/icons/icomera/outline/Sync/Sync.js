import React from 'react';
import SVG from '../../../SVG/SVG';

export default props => (
    <SVG {...props}>
        <g fill="none" strokeLinecap="round">
            <path d="M10,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7 C20,6.44771525 19.5522847,6 19,6 L18,6 L18,6"></path>
            <path d="M14,6 L5,6 C4.44771525,6 4,6.44771525 4,7 L4,17 C4,17.5522847 4.44771525,18 5,18 L6,18 L6,18"></path>
            <polyline points="12 15 9 18 12 21"></polyline>
            <polyline points="12 9 15 6 12 3"></polyline>
        </g>
    </SVG>
)
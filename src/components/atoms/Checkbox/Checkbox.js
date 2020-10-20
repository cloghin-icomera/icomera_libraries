import React from 'react';
import Box from '../Box/Box';

const SVG = ({ size = 24, ...props }) => (
    <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={size + ''}
        height={size + ''}
        viewBox="0 0 24 24"
        fill="currentcolor"
        {...props}
    />
)

const CheckboxChecked = (props) => (
    <SVG {...props}>
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </SVG>
)

const CheckboxUnchecked = (props) => (
    <SVG {...props}>
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </SVG>
)

const CheckboxIndeterminate = (props) => (
    <SVG {...props}>
        <g transform="translate(3.000000, 3.000000)">
            <path d="M4,8 L14,8 C14.5522847,8 15,8.44771525 15,9 C15,9.55228475 14.5522847,10 14,10 L4,10 C3.44771525,10 3,9.55228475 3,9 C3,8.44771525 3.44771525,8 4,8 Z M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 Z"></path>
        </g>
    </SVG>
)

const CheckboxIcon = (props) => (
    <React.Fragment>
    <CheckboxChecked
        {...props}
        __css={{
        display: 'none',
        'input:checked ~ &': {
            display: 'block',
        },
        }}
    />
    <CheckboxUnchecked
        {...props}
        __css={{
        display: 'block',
        'input:checked ~ &': {
            display: 'none',
        },
        '&.indeterminate': {
            display: 'none',
        },
        }}
    />
    <CheckboxIndeterminate
        {...props}
        __css={{
        display: 'none',
        '&.indeterminate': {
            display: 'block',
        },
        }}
    />
    </React.Fragment>
)

export default React.forwardRef(
({
    className,
    sx,
    variant = 'checkbox',
    children,
    ...props
}, ref) => (
    <Box>
        <Box
            ref={ref}
            as="input"
            type="checkbox"
            {...props}
            sx={{
                position: 'absolute',
                opacity: 0,
                zIndex: -1,
                width: 1,
                height: 1,
                overflow: 'hidden',
            }}
        />
        <Box
            as={CheckboxIcon}
            aria-hidden="true"
            __themeKey="forms"
            variant={variant}
            className={className}
            sx={sx}
            __css={{
                mr: 2,
                borderRadius: 4,
                color: 'muted',
                flexShrink: 0,
                'input:checked ~ &': {
                    color: 'primary',
                },
                'input:focus ~ &': {
                    color: 'primary',
                    bg: 'highlight',
                },
                '&.indeterminate': {
                    color: 'muted'
                }
            }}
        />
        {children}
    </Box>
    )
)
import React from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@theme-ui/color'
import Flex from '../Flex/Flex'
import Box from '../Box/Box'

const getPosition = position => {
    let sxPos = {};
    switch(position) {
        case 'top':
            sxPos = { bottom: '48px' }
            break;
        case 'left':
            sxPos = { right: '48px' }
            break;
        case 'right':
            sxPos = { left: '48px' }
            break;
        default:
            sxPos = { top: '48px' }
    }
    return sxPos
}

const Tooltip = ({
    label,
    position = 'bottom',
    children
}) => {
    const sxPos = getPosition(position)
    return (
        <Flex sx={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover .label' : {
                opacity: '100%',
                visibility: 'visible',
                transitionDelay: '.2s',
            }
        }}>
            {children}
            <Box
                className='label'
                as='span'
                sx={{
                    width: 'max-content',
                    opacity: 0,
                    transition: 'all .25s ease-in-out',
                    visibility: 'hidden',
                    bg: alpha('text', 0.85),
                    color: 'card',
                    textAlign: 'center',
                    py: 1,
                    px: 2,
                    fontSize: 0,
                    borderRadius: 'small',
                    position: 'absolute',
                    zIndex: '1',
                    pointerEvents: 'none',
                    ...sxPos
                }}
            >
                {label}
            </Box>
        </Flex>
    )
}

Tooltip.propTypes = {
    label: PropTypes.string.isRequired,
    position: PropTypes.oneOf([
        'top', 'right', 'bottom', 'left'
    ]),
    children: PropTypes.element.isRequired
}

export default Tooltip
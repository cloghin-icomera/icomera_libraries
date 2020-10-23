import React from 'react'
import { Button, Flex, IconButton } from '../../atoms'
import { ArrowLeft, ArrowRight } from '../../../icons/icomera/outline'

export default ({ pages, active, setActive }) => (
    <Flex ml='auto'>
        <IconButton 
            icon={<ArrowLeft />}
            mr={2}
            onClick={() => {
                const index = (active - 1) >= 0 ? (active - 1) : pages.length - 1
                setActive(index)
            }}
        />
        { pages.map((page, index) => 
            <Button
                key={index}
                onClick={() => {
                    setActive(index)}
                }
                label={index + 1}
                active={ index === active}
                mr={2}
                css={{ fontWeight: '400', minWidth: '40px', justifyContent: 'center' }}
            />
        )}
        <IconButton
            icon={<ArrowRight />}
            onClick={() => {
                const index = (active + 1) < pages.length ? (active + 1) : 0
                setActive(index)
            }}
        />
    </Flex>
)
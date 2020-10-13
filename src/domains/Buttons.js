import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

import { ColorModeProvider } from '../components/utils';
import { Box, Flex, Heading } from '../components/atoms';
import Button from '../components/atoms/Button/Button';
import IconButton from '../components/atoms/IconButton/IconButton';
import { AddCircle, Back, Calendar, Confirm, Delete, Edit } from '../icons/icomera/outline';
import { Error, GridView, ListView } from '../icons/icomera/solid';

const sxFlex = {
    flex: '1 1 50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
}

const sxRow = {
    justifyContent: 'space-between',
    alignItems: 'center'
}

const Buttons = () => (
    <React.Fragment>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Default Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <Button label='Default' />
                <Button label='Error' color='error' href='/' as='a' />
                <Button label='Active' active />
                <Button label='Custom' color='#00C781' />
                <Button label='Rounded' rounded />
                <Button icon={<Edit />} label='Brand' color='brand' />
                <Button icon={<AddCircle />} label='Rounded' rounded />
                <Button label='Disabled' disabled />
            </Flex>
            <Flex bg='card' p={6} sx={ sxRow }>
                <Button label='Default' />
                <Button label='Error' color='error' />
                <Button label='Active' active />
                <Button label='Custom' color='#00C781' />
                <Button label='Rounded' rounded />
                <Button icon={<Edit />} label='Brand' color='brand' />
                <Button icon={<AddCircle />} label='Rounded' rounded />
                <Button label='Disabled' disabled />
            </Flex>
        </Box>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Primary Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <Button variant='primary' label='Default' />
                <Button variant='primary' label='Error' color='error' />
                <Button variant='primary' label='Active' active />
                <Button variant='primary' label='Custom' color='#00C781' />
                <Button variant='primary' label='Rounded' rounded />
                <Button variant='primary' label='Brand' icon={<Edit />} color='brand' />
                <Button variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button variant='primary' label='Disabled' disabled />
            </Flex>
            <Flex bg='card' p={6} sx={ sxRow }>
                <Button variant='primary' label='Default' />
                <Button variant='primary' label='Error' color='error' />
                <Button variant='primary' label='Active' active />
                <Button variant='primary' label='Custom' color='#00C781' />
                <Button variant='primary' label='Rounded' rounded />
                <Button variant='primary' label='Brand' icon={<Edit />} color='brand' />
                <Button variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button variant='primary' label='Disabled' disabled />
            </Flex>
        </Box>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Outlined Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <Button variant='outlined' label='Default' />
                <Button variant='outlined' label='Error' color='error' />
                <Button variant='outlined' label='Active' active />
                <Button variant='outlined' label='Custom' color='#00C781' />
                <Button variant='outlined' label='Rounded' rounded />
                <Button variant='outlined' label='Icon' icon={<Edit />} color='muted' />
                <Button variant='outlined' icon={<AddCircle />} label='Rounded' rounded />
                <Button variant='outlined' label='Disabled' disabled />
            </Flex>
            <Flex p={6} bg='card' sx={ sxRow }>
                <Button variant='outlined' label='Default' />
                <Button variant='outlined' label='Error' color='error' />
                <Button variant='outlined' label='Active' active />
                <Button variant='outlined' label='Custom' color='#00C781' />
                <Button variant='outlined' label='Rounded' rounded />
                <Button variant='outlined' label='Icon' icon={<Edit />} color='muted' />
                <Button variant='outlined' icon={<AddCircle />} label='Rounded' rounded />
                <Button variant='outlined' label='Disabled' disabled />
            </Flex>
        </Box>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Icon Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <IconButton icon={<GridView />} />
                <IconButton icon={<ListView />} active />
                <IconButton icon={<Edit />} label='Edit' labelPosition='right' variant='action' color='brand' rounded />
                <IconButton icon={<Delete />} variant='action' label='Delete' labelPosition='top' color='error' rounded />
                <IconButton icon={<Back />} size='large' hoverIndicator />
                <IconButton icon={<Confirm />} color='#00C781' hoverIndicator />
                <IconButton icon={<Calendar />} size='small' color='brand' />
                <IconButton icon={<Error />} disabled />
            </Flex>
            <Flex bg='card' p={6} sx={ sxRow }>
                <IconButton icon={<GridView />} />
                <IconButton icon={<ListView />} active />
                <IconButton icon={<Edit />} label='Edit' variant='action' color='brand' rounded />
                <IconButton icon={<Delete />} variant='action' label='Delete' labelPosition='left' color='error' rounded />
                <IconButton icon={<Back />} size='large' hoverIndicator />
                <IconButton icon={<Confirm />} color='#00C781' hoverIndicator />
                <IconButton icon={<Calendar />} size='small' color='brand' />
                <IconButton icon={<Error />} disabled />
            </Flex>
        </Box>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Small Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <Button size='small' label='Default' />
                <Button size='small' variant='primary' label='Error' color='error' />
                <Button size='small' variant='outlined' label='Active' active />
                <Button size='small' variant='outlined' icon={<Edit />} color='#00C781' />
                <Button size='small' variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button size='small' variant='outlined' color='muted' label='+35 more' />
                <Button size='small' label='Disabled' disabled />
            </Flex>
            <Flex bg='card' p={6} sx={ sxRow }>
                <Button size='small' label='Default' />
                <Button size='small' variant='primary' label='Error' color='error' />
                <Button size='small' variant='outlined' label='Active' active />
                <Button size='small' variant='outlined' icon={<Edit />} color='#00C781' />
                <Button size='small' variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button size='small' variant='outlined' color='muted' label='+35 more' />
                <Button size='small' label='Disabled' disabled />
            </Flex>
        </Box>
        <Box sx={{ width: '100%' }}>
            <Heading as='h3' pt={6} px={6}>Large Buttons</Heading>
            <Flex p={6} sx={ sxRow }>
                <Button size='large' label='Default' />
                <Button size='large' variant='primary' label='Error' color='error' />
                <Button size='large' label='Active' active />
                <Button size='large' variant='outlined' icon={<Edit />} color='#00C781' />
                <Button size='large' variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button size='large' icon={<AddCircle />} label='Icon' />
                <Button size='large' variant='outlined' label='Disabled' disabled />
            </Flex>
            <Flex bg='card' p={6} sx={ sxRow }>
                <Button size='large' label='Default' />
                <Button size='large' variant='primary' label='Error' color='error' />
                <Button size='large' label='Active' active />
                <Button size='large' variant='outlined' icon={<Edit />} color='#00C781' />
                <Button size='large' variant='primary' icon={<AddCircle />} label='Rounded' rounded />
                <Button size='large' icon={<AddCircle />} label='Icon' />
                <Button size='large' variant='outlined' label='Disabled' disabled />
            </Flex>
        </Box>
    </React.Fragment>
);

export default () => {
    return (
        <Flex sx={{ minHeight: '100%' }}>
            <ColorModeProvider mode='dark'>
                <Flex bg='background' sx={ sxFlex }>
                    <Buttons />
                </Flex>
            </ColorModeProvider>
            <Flex sx={ sxFlex }>
                <Buttons />
            </Flex>
        </Flex>
    )
};
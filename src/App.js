import React from 'react';
import { ThemeProvider, useColorMode } from 'theme-ui';
import {
	Add,
	AddCircle,
	ArrowDown,
	ArrowUp,
	Calendar,
	Confirm,
	Copy,
	Delete,
	Edit,
	Kibana,
	Link,
	Remove,
	RemoveCircle,
	Portal,
	Search,
	Sync,
	System,
	Timer,
	Upload
} from './icons/icomera/outline';

import {
	Error,
	GridView,
	ListView,
	Success,
	SyncAction
} from './icons/icomera/solid';

import {
	Alert,
	Box,
	AspectImage,
	AspectRatio,
	Avatar,
	Checkbox,
	Close,
	Divider,
	Grid,
	Text,
	Heading,
	Card,
	Label,
	Image,
	Flex,
	Container, Button
} from './components/atoms';

import { ColorModeProvider } from './components/utils';
import icomera from './themes/icomera';

import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';

import './App.css';

const ModeChanger = props => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<button {...props} onClick={e => { setColorMode(colorMode === 'default' ? 'dark' : 'default') }}>
			Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      	</button>
	)
}

const Sidebar = props => (
	<Box {...props}>
		{props.children}
	</Box>
)

function App() {
	
	return (
		<ThemeProvider theme={icomera}>
			<div className="App">
				<Flex sx={{ flexWrap: 'wrap', height: '100%', overflow: 'hidden' }}>
					<ColorModeProvider mode='dark'>
						<Flex p={4} bg='background' sx={{ width: '100%', height: '72px' }}>
							<ModeChanger />
						</Flex>
					</ColorModeProvider>
					<Flex sx={{ height: '100%' }}>
						<ColorModeProvider mode='dark'>
							<Sidebar bg='card' p={4} sx={{
								flex: '0 0 248px',
								height: '100%'
							}}>
								<Button>Click Me</Button>
								<Text>Sidebar content</Text>
							</Sidebar>
						</ColorModeProvider>
						<Box p={4} sx={{ overflowY: 'scroll' }}>
							<TypeScale />
							<TypeStyle
								fontFamily='heading'
								fontWeight='heading'
								lineHeight='heading'
							/>
							<TypeStyle
								fontFamily='body'
								fontWeight='body'
								lineHeight='body'
							/>
							<ColorPalette />
							<Flex>
								<Add stroke='text' />
								<AddCircle stroke='text' />
								<ArrowDown stroke='text' />
								<ArrowUp stroke='text' />
								<Calendar stroke='text' />
								<Confirm stroke='text' />
								<Copy stroke='text' />
								<Delete stroke='text' />
								<Edit stroke='text' />
								<Kibana stroke='text' />
								<Link stroke='text' />
								<Remove stroke='text' />
								<RemoveCircle stroke='text' />
								<Portal stroke='text' />
								<Search stroke='text' />
								<Sync stroke='text' />
								<System stroke='text' />
								<Timer stroke='text' />
								<Upload stroke='text' />
								<Error fill='error' />
								<GridView fill='text' />
								<ListView fill='text' />
								<Success fill='success' />
								<SyncAction fill='warning' />
							</Flex>
							<Alert variant='error_outline' mt={2}>
								OMG, pay attention to me!
								<Close ml='auto' mr={-2} icon={<Remove stroke='error' />} />
							</Alert>
							<Alert variant='error' mt={2}>
								OMG, pay attention to me!
								<Close ml='auto' mr={-2} />
							</Alert>
							<Button>Test</Button>
							<Button sx={{ ':hover' : { bg: 'muted' } }}>Test 2</Button>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Scelerisque eu ultrices vitae auctor. Et tortor consequat id porta nibh venenatis cras sed felis. Leo a diam sollicitudin tempor id eu nisl nunc mi. Dui sapien eget mi proin sed. Senectus et netus et malesuada fames. Etiam erat velit scelerisque in dictum. Diam vel quam elementum pulvinar etiam non quam lacus. Mauris pharetra et ultrices neque. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet porttitor eget dolor morbi non arcu.
								<br/><br/>Fermentum posuere urna nec tincidunt praesent semper feugiat. Urna condimentum mattis pellentesque id nibh tortor id. Nisi lacus sed viverra tellus in hac habitasse. Justo donec enim diam vulputate ut pharetra sit. Lacus sed viverra tellus in hac habitasse platea. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ornare suspendisse sed nisi lacus sed viverra tellus in. Aliquam sem fringilla ut morbi tincidunt augue. Mattis vulputate enim nulla aliquet porttitor lacus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Egestas diam in arcu cursus euismod quis viverra nibh.
								<br/><br/>Justo nec ultrices dui sapien eget mi proin sed. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Amet consectetur adipiscing elit ut aliquam. Odio morbi quis commodo odio aenean. Tellus pellentesque eu tincidunt tortor aliquam nulla. Viverra justo nec ultrices dui sapien eget mi. Donec et odio pellentesque diam volutpat commodo sed egestas. Orci ac auctor augue mauris augue. At in tellus integer feugiat scelerisque varius. Rhoncus dolor purus non enim praesent elementum facilisis. Tristique nulla aliquet enim tortor at auctor urna nunc. Ultrices eros in cursus turpis massa tincidunt dui ut. Dolor magna eget est lorem ipsum dolor sit. Odio ut sem nulla pharetra diam sit amet.
								<br/><br/>Leo in vitae turpis massa. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Ut etiam sit amet nisl purus. Interdum posuere lorem ipsum dolor sit. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Tortor condimentum lacinia quis vel. Sit amet tellus cras adipiscing enim eu turpis egestas. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Pretium aenean pharetra magna ac placerat. Nunc pulvinar sapien et ligula ullamcorper malesuada.
								<br/><br/>Lorem ipsum dolor sit amet consectetur adipiscing. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Ut diam quam nulla porttitor massa id neque aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Consectetur adipiscing elit ut aliquam. Tempus urna et pharetra pharetra massa massa ultricies. Nascetur ridiculus mus mauris vitae ultricies. Lacinia quis vel eros donec ac odio tempor orci. Eget velit aliquet sagittis id consectetur. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Risus nullam eget felis eget. Scelerisque in dictum non consectetur a erat nam.							</Text>
						</Box>
					</Flex>
				</Flex>
			</div>
		</ThemeProvider>
	);
}
	
export default App;
	
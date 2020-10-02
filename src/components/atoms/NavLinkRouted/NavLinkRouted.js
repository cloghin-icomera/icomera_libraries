import React from 'react';
import { keyframes } from '@emotion/core';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import Flex from '../Flex/Flex';

export default React.forwardRef ((props, ref) => {
	let icon = null;
	let match = useRouteMatch({
		path: props.to,
		exact: props.exact ? true : false
	});
	if (props.icon) {
		icon = React.cloneElement( props.icon, { mr: 2 } );
	}
	return (
		<RouterLink to={props.to} style={{ textDecoration : 'none'}}>
			<Flex
				ref={ref}
				variant={props.variant || 'nav'}
				{...props}
				__themeKey="links"
				className={match ? "active" : ""}
			>
				{ icon }
				{ props.label }
			</Flex>
		</RouterLink>
	)
})
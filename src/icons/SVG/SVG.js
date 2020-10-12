/** @jsx jsx */
import { jsx, useThemeUI, Box } from 'theme-ui';

const SVG = ({title = undefined, size = 24, children, ...props}) => {
    const { theme } = useThemeUI();
    let svg_style = {};
    if (theme) {
        if ( props.stroke && theme.colors[props.stroke] ) {
            svg_style.stroke = theme.colors[props.stroke];
        } else {
            svg_style.stroke = props.stroke;
        }
        if ( props.fill && theme.colors[props.fill] ) {
            svg_style.fill = theme.colors[props.fill];
        } else {
            svg_style.fill = props.fill;
        }
    } else {
        svg_style = {
            stroke: props.stroke || '#000',
            fill: props.fill || '#000'
        }
    }

    return (
        <Box
            css={{
                width : `${size}px`,
                height : `${size}px`
            }}
            {...props}
        >
            <svg
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                {...svg_style}
                strokeWidth="2"
            >
                { title && <title>{title}</title> }
                { children }
            </svg>
        </Box>
    )
}

export default SVG;
/** @jsx jsx */
import { jsx, useThemeUI, Box } from 'theme-ui';

const SVG = ({title = undefined, size = 24, children, ...props}) => {
    const { theme } = useThemeUI();
    const strokeWidth = props.strokeWidth || '2';
    let stroke = props.stroke || '#000';
    let fill = props.fill || '#000';

    if (theme && theme.colors[props.stroke]) {
        stroke = theme.colors[props.stroke];
    }

    if (theme && theme.colors[props.fill]) {
        fill = theme.colors[props.fill];
    }

    return (
        <Box
            css={{
                width : `${size}px`,
                height : `${size}px`
            }}
        >
            <svg
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill={fill}
            >
                { title && <title>{title}</title> }
                { children }
            </svg>
        </Box>
    )
}

export default SVG;
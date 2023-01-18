export interface HoverProps {
    hover: boolean
}

export default function useHoverProps (props: HoverProps = null) {
    return {
        hover: {
            type: Boolean,
            default: props === null || !props.hasOwnProperty('hover') ? null : props.hover,
        },
    }
}

export function hoverArgs (props: HoverProps) {
    return {
        hover: props.hover
    }
}

export function hoverArgTypes (props: HoverProps) {
    return {
        hover: {
            control: { type: 'boolean' },
            description: 'Whether hover styles should be added to this component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.hover
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}

export interface FlexChildProps {
    grow?: boolean
    shrink?: boolean
}

export default function useFlexChildProps () {
    return {
        grow: {
            type: Boolean,
            default: false,
        },
        shrink: {
            type: Boolean,
            default: false,
        },
    }
}

export function flexChildArgs (props: FlexChildProps) {
    return {
        grow: false,
        shrink: false
    }
}

export function flexChildArgTypes (props: FlexChildProps) {
    return {
        grow: {
            control: { type: 'boolean' },
            description: 'With a flex parent, this prop will cause this component to grow to fill the container.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                },
            }
        },
        shrink: {
            control: { type: 'boolean' },
            description: 'With a flex parent, this prop will cause this component to shrink within the container.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}

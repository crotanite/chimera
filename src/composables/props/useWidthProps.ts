import { Sizes } from '../../theme'

export interface WidthProps {
    width: null|number|string|Sizes<number|string>
    maxWidth?: null|number|string
}

export default function useWidthProps (props: WidthProps = null, includeMaxWidth: boolean = true) {
    return {
        width: {
            type: [Number, String, Object as () => Sizes<number|string>],
            default: undefined,
        },

        ...(includeMaxWidth ? {
            maxWidth: {
                type: [Number, String],
                default: props === null || !props.hasOwnProperty('maxWidth') ? null : props.maxWidth,
            },
        } : {}),
    }
}

export function widthArgs (props: WidthProps, includeMaxWidth: boolean = true) {
    return {
        width: props.width,
        ...(includeMaxWidth ? {
            maxWidth: props.maxWidth
        } : {}),
    }
}

export function widthArgTypes (props: WidthProps, includeMaxWidth: boolean = true) {
    return {
        width: {
            control: { type: 'number' },
            description: 'Set a fixed width for the component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.width
                },
                type: {
                    summary: 'number|string|Sizes'
                },
            }
        },
        ...(includeMaxWidth ? {
            maxWidth: {
                control: { type: 'number' },
                description: 'Set a max width for the component.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.maxWidth
                    },
                    type: {
                        summary: 'number|string'
                    },
                }
            }
        } : {}),
    }
}

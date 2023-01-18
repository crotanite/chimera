import { Sizes } from '../../theme'

export interface HeightProps {
    height: null|number|string|Sizes<number|string>
    maxHeight?: null|number|string
}

export default function useHeightProps (props: HeightProps = null, includeMaxHeight: boolean = true) {
    return {
        height: {
            type: [Number, String, Object as () => Sizes<number|string>],
            default: props === null || !props.hasOwnProperty('height') ? null : props.height,
        },
        ...(includeMaxHeight ? {
            maxHeight: {
                type: [Number, String],
                default: props === null || !props.hasOwnProperty('maxHeight') ? null : props.maxHeight,
            },
        } : {}),
    }
}

export function heightArgs (props: HeightProps) {
    return {
        height: props.height,
        maxHeight: props.maxHeight
    }
}

export function heightArgTypes (props: HeightProps) {
    return {
        height: {
            control: { type: 'number' },
            description: 'Set a fixed height for the component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.height
                },
                type: {
                    summary: 'number|string|Sizes'
                },
            }
        },
        maxHeight: {
            control: { type: 'number' },
            description: 'Set a max height for the component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.maxHeight
                },
                type: {
                    summary: 'number|string'
                },
            }
        }
    }
}

import { extendedSizes, Sizes } from '../../theme'

export interface PaddingProps {
    p: null|string|number
    px: null|string|number
    py: null|string|number
}

export default function usePaddingProps () {
    return {
        p: {
            type: [String, Number],
            default: undefined,
            validator: (v: keyof Sizes<string>|number) => typeof v === 'number' || extendedSizes.includes(v),
        },

        px: {
            type: [String, Number],
            default: undefined,
            validator: (v: keyof Sizes<string>|number) => typeof v === 'number' || extendedSizes.includes(v),
        },

        py: {
            type: [String, Number],
            default: undefined,
            validator: (v: keyof Sizes<string>|number) => typeof v === 'number' || extendedSizes.includes(v),
        }
    }
}

export function paddingArgs (props: PaddingProps) {
    return {
        p: props.p,
        px: props.px,
        py: props.py
    }
}

export function paddingArgTypes (props: PaddingProps) {
    return {
        p: {
            control: 'select',
            options: extendedSizes.concat(null),
            description: 'Set the padding for the component. Can be a fixed number or an option from the `spacing` property of the theme.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.p)
                },
                type: {
                    summary: 'string|number'
                },
            }
        },
        px: {
            control: 'select',
            options: extendedSizes.concat(null),
            description: 'Set the horizontal padding for the component. Overrides `p`. Can be a fixed number or an option from the `spacing` property of the theme.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.px)
                },
                type: {
                    summary: 'string|number'
                },
            }
        },
        py: {
            control: 'select',
            options: extendedSizes.concat(null),
            description: 'Set the vertical padding for the component. Overrides `p`. Can be a fixed number or an option from the `spacing` property of the theme.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.py)
                },
                type: {
                    summary: 'string|number'
                },
            }
        }
    }
}

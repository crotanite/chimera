import useGetThemeProperty from '../useGetThemeProperty'

const sizes = Object.keys(useGetThemeProperty('borderRadius')).concat('full')

export interface RoundedProps {
    rounded: null|string|number
}

export default function useRoundedProps () {
    return {
        rounded: {
            type: [String, Number],
            default: undefined,
            validator: (v: string|number) => typeof v === 'number' || sizes.includes(v),
        },
    }
}

export function roundedArgs (props: RoundedProps) {
    return {
        rounded: props.rounded
    }
}

export function roundedArgTypes (props: RoundedProps) {
    return {
        rounded: {
            control: { type: 'select' },
            description: 'The size of the border radius to apply. Can be a fixed number in px or an option from the `borderRadius` property of the theme.',
            options: sizes.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.rounded)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}

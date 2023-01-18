import { sizes, Sizes } from '../../theme'
import useGetThemeColors from '../useGetThemeColors'

export const colors = useGetThemeColors()

export interface ShadowProps {
    shadow: null|keyof Sizes<string>
}

export default function useShadowProps () {
    return {
        shadow: {
            type: String,
            default: undefined,
            validator: (v: keyof Sizes<string>) => sizes.includes(v),
        },
    }
}

export function shadowArgs (props: ShadowProps) {
    return {
        shadow: props.shadow
    }
}

export function shadowArgTypes (props: ShadowProps) {
    return {
        shadow: {
            control: 'select',
            description: 'The size of the shadow to apply.',
            options: sizes.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.shadow)
                },
                type: {
                    summary: 'string'
                },
            }
        },
    }
}

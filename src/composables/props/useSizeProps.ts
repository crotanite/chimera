import { sizes, Sizes } from '../../theme'

export interface SizeProps {
    size: string
}

export default function useSizeProps (props: SizeProps = null) {
    return {
        size: {
            type: String,
            default: undefined,
            validator: (v: keyof Sizes<string>) => sizes.includes(v)
        },
    }
}

export function sizeArgs (props: SizeProps) {
    return {
        size: props.size
    }
}

export function sizeArgTypes (props: SizeProps = null) {
    return {
        size: {
            control: 'select',
            description: 'The size to apply.',
            options: sizes,
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.size)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}

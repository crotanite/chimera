export const forceTextOptions = ['uppercase', 'lowercase', 'capitalize', 'normal-case']

export interface ForceTextProps {
    forceText: null|string
}

export default function useForceTextProps (props: ForceTextProps = null) {
    return {
        forceText: {
            type: String,
            default: undefined,
            validator: (v: null|string) => v === null || forceTextOptions.includes(v)
        },
    }
}

export function forceTextArgs (props: ForceTextProps) {
    return {
        forceText: props.forceText
    }
}

export function forceTextArgTypes (props: ForceTextProps) {
    return {
        forceText: {
            control: 'select',
            description: 'Force the text to display in a certain style.',
            options: forceTextOptions.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.forceText)
                },
                type: {
                    summary: 'string|object'
                },
            }
        }
    }
}

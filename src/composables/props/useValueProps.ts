export interface ValueProps {
    value?: string
}

export default function useValueProps (props: ValueProps = null) {
    return {
        value: {
            type: String,
            default: props === null || !props.hasOwnProperty('value') ? null : props.value,
            required: true
        }
    }
}

interface Props {
    value: { default: ValueProps['value'] }
}

export function valueArgs (props: Props) {
    return {
        value: props === null ? useValueProps().value.default : props.value.default
    }
}

export function valueArgTypes (props: Props = null) {
    return {
        value: {
            control: { type: 'text' },
            description: 'The value of the component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props === null ? useValueProps().value.default : props.value.default)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}

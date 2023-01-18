export interface LabelProps {
    description?: null|string
    label?: null|string
}

export default function useLabelProps (props: LabelProps = null) {
    return {
        description: {
            type: String,
            default: props === null || !props.hasOwnProperty('description') ? null : props.description,
        },

        label: {
            type: String,
            default: props === null || !props.hasOwnProperty('label') ? null : props.label,
        },
    }
}

export function labelArgs (props: LabelProps) {
    return {
        description: props.description,
        label: props.label
    }
}

export function labelArgTypes (props: LabelProps) {
    return {
        description: {
            control: { type: 'text' },
            description: 'Pass the description.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.description)
                },
                type: {
                    summary: 'string'
                },
            }
        },
        label: {
            control: { type: 'text' },
            description: 'Pass the label.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.label)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}

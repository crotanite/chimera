export interface MultipleProps {
    multiple?: boolean
}

export default function useMultipleProps () {
    return {
        multiple: {
            type: Boolean,
            default: false
        }
    }
}

export function multipleArgs (props: MultipleProps) {
    return {
        multiple: props.multiple
    }
}

export function multipleArgTypes (props: MultipleProps) {
    return {
        multiple: {
            control: { type: 'boolean' },
            description: 'Whether to allow multiple sub components to be active.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.multiple
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}

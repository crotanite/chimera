export interface DisabledProps {
     disabled?: boolean
}

export default function useDisabledProps () {
    return {
        disabled: {
            type: Boolean,
            default: undefined,
        }
    }
}

export function disabledArgs () {
    return {
        disabled: false
    }
}

export function disabledArgTypes () {
    return {
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether this component is disabled.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}
